// import user-defidned modules or Schema
const Contributor = require("../models/Contributor");

// url: `${baseUrl}/api/contributors`;

exports.getContributors = async (req, res) => {
    Contributor.find({}, function (err, docs) {
        if (err) {
            res.status(500).json({
                message: { msgError: true, msgBody: "Error has occured" },
            });
        } else {
            res.status(200).json(docs);
        }
    });
};
