// Import the necessary packages
const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const fetch = require("node-fetch");

//validate
const validateRegisterInput = require("../validation/register_validate");
// import user-defidned modules or Schema
const User = require("../models/User");
const Todo = require("../models/Todo");
const { nextTick } = require("process");
// const SecretCode = require("../models/SecretCode");

// const generatecode = () => {
//     return crypto.randomBytes(128).toString("hex");
// };



const signToken = (userID) => {
    return JWT.sign(
        {
            iss: "Programmers_Army",
            sub: userID,
        },
        process.env.SECRETORKEY,
        { expiresIn: "1h" }
    );
};

var auth = require("../controller/auth");
var user_controller = require("../controller/user_controller");

userRouter.post("/register", auth.register);
userRouter.post("/login", auth.login);
userRouter.post("/login/facebook", auth.facebooklogin);
userRouter.post("/login/google", auth.googlelogin);
userRouter.post("/logingithub", auth.githublogin);

userRouter.get(
    "/isAuthenticated",
    passport.authenticate("jwt", { session: false }), //middleware to check the authorization status of user
    auth.isAuthenticated
);
userRouter.post(
    "/createTodo",
    passport.authenticate("jwt", { session: false }), //middleware to check the authorization status of user
    user_controller.createTodo
);




// get info about user profile and the todos that person has created
// make sure this is the last route, otherwise it will be matched for other routes and will throw unotherzed access
// url: `${baseUrl}/api/user/${user._id}`;

userRouter.get(
    "/:username",
    passport.authenticate("jwt", { session: false }), //middleware to check the authorization status of user
    user_controller.profile
);

module.exports = userRouter;