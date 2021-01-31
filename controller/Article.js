const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const fetch = require("node-fetch");

const User = require("../models/User");
const Article = require("../models/Article");
const UnVerifiedArticle = require("../models/UnVerifiedArticle");

const Domain = require("../models/Domain");

exports.getAllDomains = (req, res) => {
    Domain.find({}, { articles: 0 }, (err, docs) => {
        if (err) {
            res.status(500).json({
                error: true,
                errorBody: "Error has occured",
            });
        } else {
            res.status(200).json({
                error: false,
                domains: docs,
            });
        }
    });
};

exports.addDomain = (req, res) => {
    const { title, description } = req.body;
    // console.log(req.body);

    Domain.findOne({ title }, (err, doc) => {
        if (err) {
            res.status(500).json({
                error: true,
                errorBody: "Error has occured",
            });
        } else if (doc) {
            res.status(409).json({
                error: true,
                errorBody: "Domain already exists!",
            });
        } else {
            const newDomain = new Domain({
                title,
                description,
            });
            newDomain.save((err, doc) => {
                if (err) {
                    res.status(500).json({
                        error: true,
                        errorBody: "Error has occured",
                    });
                } else {
                    res.status(201).json({
                        error: false,
                        domain: doc,
                        message: "Domain Created Succefully!",
                    });
                }
            });
        }
    });
};

exports.getAllArticles = (req, res) => {
    Article.find({}, { limit: 50 }, (err, articles) => {
        if (err) {
            res.status(500).json({
                error: true,
                errorBody: "Internal Server Error",
            });
        } else {
            res.status(200).json({
                error: false,
                articles,
            });
        }
    });
};

const getDomains = async (domains) => {
    domains = domains.map((domain) => {
        return domain._id;
    });
    return domains;
};

exports.createArticle = async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        res.status(403).json({
            error: true,
            errorBody: "Title or Content can not be empty!",
        });
    } else {
        const domains = await getDomains(req.body.domains);
        // console.log(domains);
        const newArticle = new UnVerifiedArticle({
            title,
            small_description: req.body.small_description,
            content,
            picture: req.body.picture,
            author: {
                _id: req.user._id,
                authorName: req.user.name,
            },
            domains,
        });
        // console.log(newArticle);
        newArticle.save((err, article) => {
            if (err) {
                res.status(500).json({
                    error: true,
                    errorBody: "Internal Server Error",
                });
            } else {
                res.status(201).json({
                    error: false,
                    article,
                    message: "Article Created Succefully~",
                });
            }
        });
    }
};

exports.verifyArticle = async (req, res) => {
    const { _id, accept } = req.body;
    if (!_id) {
        res.status(400).json({
            error: true,
            errorBody: "_id of the Article required!",
        });
    } else {
        try {
            const unVerifiedArticle = await UnVerifiedArticle.findById(_id);
            if (!unVerifiedArticle) {
                res.status(400).json({
                    error: true,
                    errorBody: "No Such Article",
                });
            } else {
                if (accept) {
                    const domains = unVerifiedArticle.domains;
                    const newArticle = new Article({
                        title: unVerifiedArticle.title,
                        content: unVerifiedArticle.content,
                        author: unVerifiedArticle.author,
                        small_description: unVerifiedArticle.small_description,
                        picture: unVerifiedArticle.picture,
                        difficulty: unVerifiedArticle.difficulty.difficulty,
                        domains: unVerifiedArticle.domains,
                        createdAt: unVerifiedArticle.createdAt,
                        verifier: {
                            _id: req.user._id,
                            verifierName: req.user.name,
                        },
                    });
                    newArticle.save((err, article) => {
                        if (err) {
                            res.status(500).json({
                                error: true,
                                errorBody: "Internal Server Error",
                            });
                        } else {
                            UnVerifiedArticle.deleteOne(
                                { _id: unVerifiedArticle._id },
                                (err) => {
                                    if (err) {
                                        console.log(err);
                                    }
                                }
                            );
                            domains.forEach((_id) => {
                                Domain.updateOne(
                                    { _id },
                                    {
                                        $push: {
                                            articles: article._id,
                                        },
                                    },
                                    (err) => {
                                        if (err) {
                                            console.log(err);
                                        }
                                    }
                                );
                            });
                            let points = 0;
                            if (article.difficulty === "easy") points = 10;
                            if (article.difficulty === "medium") points = 20;
                            if (article.difficulty === "hard") points = 30;
                            User.updateOne(
                                { _id: article.author._id },
                                { $inc: { contribution_points: points } },
                                (err) => {
                                    if (err) {
                                        console.log(err);
                                    }
                                }
                            );
                            res.status(200).json({
                                error: false,
                                article,
                                message: "Article Verified Succefully",
                            });
                        }
                    });
                } else {
                    UnVerifiedArticle.updateOne(
                        { _id },
                        { $set: { status: "rejected" } },
                        (err) => {
                            if (err) {
                                console.log(err);
                            }
                        }
                    );
                    res.status(200).json({
                        error: false,
                        message: "Article Rejected Succefully",
                    });
                }
            }
        } catch {
            res.status(500).json({
                error: true,
                errorBody: "Internal Server Error last",
            });
        }
    }
};

exports.getAllArticles = (req, res) => {
    Article.find({}, (err, articles) => {
        if (err) {
            res.status(500).json({
                error: true,
                errorBody: "Internal Server Error",
            });
        } else {
            res.status(200).json({
                error: false,
                articles,
            });
        }
    }).limit(20);
};

exports.getDomainArticles = (req, res) => {
    const { _id } = req.query;

    Domain.findById(_id)
        .populate({
            path: "articles",
            select:
                "title difficulty ratings.overall_rating_points numberOfViews",
        })
        .exec((err, docs) => {
            if (err) {
                res.status(500).json({
                    error: true,
                    errorBody: "Internal Server Error",
                });
            } else if (docs) {
                res.status(200).json({
                    error: false,
                    domain: docs,
                });
            } else {
                res.status(400).json({
                    error: true,
                    errorBody: "No such Domain Exists!",
                });
            }
        });
};

exports.getArticleById = (req, res) => {
    console.log(req.query);
    const { _id } = req.query;
    Article.findOne({ _id }, (err, article) => {
        if (err) {
            res.status(500).json({
                error: true,
                errorBody: "Internal Server Error",
            });
        } else if (article) {
            res.status(200).json({
                error: false,
                article,
            });
        } else {
            res.status(400).json({
                error: true,
                errorBody: "No such Article Exists!",
            });
        }
    });
};

exports.getDomainArticlesByFilter = (req, res) => {
    console.log(req.query);
    const { _id } = req.query;
    let limit = req.query.limit || 20;
    limit = parseInt(limit);
    let filter = req.query.filter;
    if (!filter || filter === "overall_rating_points") {
        filter = "ratings.overall_rating_points";
    }
    Domain.findById(_id)
        .populate({
            path: "articles",
            options: {
                limit: limit,
                sort: { [filter]: -1 },
            },
        })
        .exec((err, docs) => {
            if (err) {
                res.status(500).json({
                    error: true,
                    errorBody: "Internal Server Error",
                });
            } else if (docs) {
                res.status(200).json({
                    error: false,
                    domain: docs,
                });
            } else {
                res.status(400).json({
                    error: true,
                    errorBody: "No such Domain Exists!",
                });
            }
        });
};
