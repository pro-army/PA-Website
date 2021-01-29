import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../css/signup.css";
import { AuthContext } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";
import LoginCardBackground from '../../image_assets/login-signup/LoginCardBackground.svg'
import BackgroundWithTrees from '../../image_assets/login-signup/SignupBackgroundWithTrees.svg'
import GirlWithLaptop from '../../image_assets/login-signup/Group 122.svg'
import LinkedinLogin from "./LoginwithLinkedin";
import LoginGoogle from "./Loginwithgoogle";
import LoginFacebook from "./LoginwithFacebook";
import LoginwithGithub from "./LoginwithGithub";
import Message from "./Message";
import GoogleIcon from '../../image_assets/login-signup/GoogleIcon.svg'
import FacebookIcon from '../../image_assets/login-signup/FacebookIcon.svg'
import LinkedinIcon from '../../image_assets/login-signup/LinkedinIcon.svg'
import TelegramIcon from '../../image_assets/login-signup/TelegramIcon.svg'
import YoutubeIcon from '../../image_assets/login-signup/YoutubeIcon.svg'
import GithubIcon from '../../image_assets/login-signup/GithubIcon.svg'
import TwitterIcon from '../../image_assets/login-signup/TwitterIcon.svg'

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100&display=swap');
</style>
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        // marginBottom: '5vh',
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 30px 36px #557DA526",
        borderRadius: "20px",
        padding: "1vw",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
        color: '#05386B',
        fontFamily: 'Prompt',
    },
    submit: {
        // marginTop: '8vh',
        marginLeft: '3vw',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        color: 'white',
        background: "#05386B",
        fontFamily: 'Prompt, sans-serif',
        margin: theme.spacing(3, 0, 2),
        fontWeight: '700',
    },
    'login-background': {
        justifyContent: 'center',
        alignItems: 'center',
        display: "flex",
        marginTop: '8vh',
        marginLeft: '2vw',
        borderRadius: '15px',
        paddingTop: '1vh',
        paddingBottom: '10vh',
        paddingLeft: '3vw',
    },
    LoginCardBackground: {
        position: 'relative',
        zIndex: -1,
        marginTop: '0vh',
        marginBottom: '-100vh',

    },
    'background-with-trees': {
        width:'90vw',
        height: '80vh',
        position: 'absolute',
        zIndex: '-1',
        marginLeft: '-8vw',
        marginTop: '8vh !important',
    }
}));

export default function Signup() {
    const classes = useStyles();
    const history = useHistory();

    const [user, setUser] = useState({
        userRole: 1,
        email: " ",
        password: "",
        confirmPassword: "",
        name: "",
        skills: "",
    });

    function isEmail(email) {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // Converting the email to lowercase
        return regexp.test(String(email).toLowerCase());
    }

    const [message, setMessage] = useState([]);
    const authContext = useContext(AuthContext);

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        fetch("https://jobs-api.squareboat.info/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                if (data.code === 201) {
                    localStorage.setItem("isAuthenticated", true);
                    localStorage.setItem("token", data.data.token);
                    localStorage.setItem("userRole", data.data.userRole);
                    localStorage.setItem("userName", data.data.name);
                    authContext.setUser(data.data);
                    authContext.setIsAuthenticated(true);
                    if (data.data.userRole === 0) {
                        history.push("/Jobs__PostedByYou");
                    } else {
                        history.push("/Jobs__PostedForYou");
                    }
                } else {
                    setMessage(data.errors);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className='login-items-position'>
        <img src={GirlWithLaptop} className='girl-with-laptop' alt='girl with laptop' />
        {window.location.pathname === '/signup' ? <img src={BackgroundWithTrees} className={classes['background-with-trees']} /> : null}
        <div className='signup-container'>
            <Container className={classes["login-background"]}>
                    <Container component="Login" maxWidth="xs" Style='margin-right:0vw;margin-left:0vw;padding-right:0vw;'>
                        <div className={classes.paper}>
                            <form className={classes.form} noValidate>
                            <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="off"
                                    // value={user.email}
                                    onChange={changeHandler}
                                    // error={user.email === ""}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="off"
                                    // value={user.email}
                                    onChange={changeHandler}
                                    // error={user.email === ""}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="off"
                                    // value={user.email}
                                    onChange={changeHandler}
                                    // error={user.email === ""}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={changeHandler}
                                    error={user.password === ""}
                                />
                                {message && <Message text={message} />}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className={classes.submit}
                                    onClick={submitHandler}
                                >
                                    Sign up
                                </Button>
                                <div className='sign-in-using'>
                                    <span />
                                    <p>or sign up using</p>
                                    <span /> 
                                </div>
                                <div className='login-linkedin-github-google-facebook'>
                                    <LinkedinLogin />
                                    <span />
                                    <LoginGoogle />
                                    <span />
                                    <LoginFacebook />
                                    <span />
                                    <LoginwithGithub />
                                </div>
                            </form>
                        </div>
                    </Container>
                    <div className='login-signin-button-container'>
                        <Link href="./login" Style='text-decoration: none;'>
                            <div className="login-signin-button-text login-button">Login</div>
                        </Link>
                        <Link href="./signup" Style='text-decoration: none;'>
                            <div className="login-signin-button-text signin-button">Signup</div>
                        </Link>
                    </div>
            </Container>
    </div>
    <div className='login-footer'>
        <div Style='font-family:Montserrat;font-weight:700;'>Follow us on</div>
        <div>
            {/* <a href=''>
                <img src={GoogleIcon} alt='google' />
            </a> */}
            <a href='https://www.facebook.com/Programmers-Army-105809441239783'>
                <img src={FacebookIcon} alt='facebook' />
            </a>
            {/* <a href=''>
                <img src={TelegramIcon} alt='telegram' />
            </a> */}
            <a href='https://www.youtube.com/channel/UCRJS3O94F8cOj2U0gOUwmBA'>
                <img src={YoutubeIcon} alt='youtube' />
            </a>
            {/* <a href=''>
                <img src={LinkedinIcon} alt='Linkedin' />
            </a> */}
            <a href='https://twitter.com/ProgrammingArmy'>
                <img src={TwitterIcon} alt='Twitter' />
            </a>
        </div>
        <div Style='font-family:Montserrat;font-weight:300;'>Copyright © Programmers Army All rights reserved 2020</div>
    </div>
</div>
    );
}