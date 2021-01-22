// Import the necessary packages
const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const crypto = require("crypto");
<<<<<<< HEAD
const {OAuth2Client}=require('google-auth-library')
var bcrypt = require('bcryptjs');
const fetch = require("node-fetch");
const cookieSession = require("cookie-session");
=======
const { OAuth2Client } = require("google-auth-library");
const bcrypt = require("bcryptjs");
const fetch = require("node-fetch");

>>>>>>> 8d5ae399e7d0e3990b2c83e71f1c6e48dfe38f05
//validate
const validateRegisterInput = require("../validation/register_validate");
// import user-defidned modules or Schema
const User = require("../models/User");
const Todo = require("../models/Todo");
// const SecretCode = require("../models/SecretCode");

// const generatecode = () => {
//     return crypto.randomBytes(128).toString("hex");
// };

const ClientId = process.env.Google_ClientId;
const client = new OAuth2Client(ClientId);

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
//console.log({ client_id, client_secret });
userRouter.use(
  cookieSession({
    secret: process.env.COOKIE_SECRET
  })
);

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

//signin and signup using google
userRouter.post("/logingoogle", (req, res) => {
    const { tokenId } = req.body;
    client
        .verifyIdToken({ idToken: tokenId, audience: ClientId })
        .then((response) => {
            //console.log(response.payload)
            const { email_verified, email } = response.payload;
            const first_name = response.payload.given_name || "";
            const last_name = response.payload.family_name || "";
            //  console.log(first_name)
            //  console.log(last_name)
            if (email_verified) {
                User.findOne({ email }, (err, saveduser) => {
                    if (err) {
                        console.log(1);
                        res.status(500).json({
                            message: {
                                msgError: true,
                                msgBody: "Something went wrong!",
                            },
                        });
                    } else {
                        if (saveduser) {
                            //user already have an account
                            const token = signToken(saveduser._id);
                            res.status(200).json({
                                token,
                                isAuthenticated: true,
                                message: {
                                    msgError: false,
                                    msgBody: "Login Successful",
                                },
                            });
                        } else {
                            //user is not registered
                            res.status(401).json({
                                message: {
                                    msgError: true,
                                    msgBody:
                                        "You don't have an account.You need to Signin first",
                                },
                            });
                        }
                    }
                });
            } else {
                res.status(401).json({
                    message: {
                        msgError: true,
                        msgBody: "Google Account Not Verified!",
                    },
                });
            }
        });
});

userRouter.post("/signupgoogle", (req, res) => {
    const { tokenId } = req.body;
    client
        .verifyIdToken({ idToken: tokenId, audience: ClientId })
        .then((response) => {
            //console.log(response.payload)
            const { email_verified, email } = response.payload;
            const first_name = response.payload.given_name || "";
            const last_name = response.payload.family_name || "";

            if (email_verified) {
                User.findOne({ email }, (err, saveduser) => {
                    if (err) {
                        res.status(500).json({
                            message: {
                                msgError: true,
                                msgBody: "Something went wrong!",
                            },
                        });
                    } else {
                        if (saveduser) {
                            //user already have an account
                            res.status(401).json({
                                message: {
                                    msgError: true,
                                    msgBody:
                                        "You have an account.Go to login page",
                                },
                            });
                        } else {
                            //user is not registered
                            let password = email + process.env.Google_Secret;
                            bcrypt.hash(password, 12).then((hashpassword) => {
                                const newUser = new User({
                                    email,
                                    name: {
                                        first_name,
                                        last_name,
                                    },
                                    password: hashpassword,
                                });
                                newUser.save((err) => {
                                    if (err)
                                        res.status(500).json({
                                            message: {
                                                msgError: true,
                                                msgBody: "Error has occured",
                                            },
                                        });
                                    else
                                        res.status(201).json({
                                            message: {
                                                msgError: false,
                                                msgBody:
                                                    "Account successfully created",
                                            },
                                        });
                                });
                            });
                        }
                    }
<<<<<<< HEAD
                }
            })
        }
    })
})

// sign in with github
async function getAccessToken({ code, client_id, client_secret }) {
    const request = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code
      })
    });
    const text = await request.text();
    const params = new URLSearchParams(text);
    return params.get("access_token");
  }
  async function fetchGitHubUser(token) {
  const request = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: "token " + token
    }
  });
  return await request.json();
}

userRouter.post('/logingithub',async (req,res)=>{
  const {code}=req.body;
    console.log(code)
    const token= await getAccessToken({code,client_id,client_secret})
    console.log(token);
    const user = await fetchGitHubUser(token);
     console.log(user);
   // const access_token = await getAccessToken({ code, client_id, client_secret });
   // console.log(access_token)
    //res.json({access_token})

})

=======
                });
            }
        });
});
>>>>>>> 8d5ae399e7d0e3990b2c83e71f1c6e48dfe38f05

// get info about user profile and the todos that person has created
// make sure this is the last route, otherwise it will be matched for other routes and will throw unotherzed access
// url: `${baseUrl}/api/user/${user._id}`;

userRouter.get(
    "/:username",
    passport.authenticate("jwt", { session: false }), //middleware to check the authorization status of user
    user_controller.profile
);

module.exports = userRouter;
