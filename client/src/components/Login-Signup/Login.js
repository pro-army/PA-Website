import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Message from "./Message";
import "../css/login.css";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import LoginCardBackground from '../../image_assets/login-signup/LoginCardBackground.svg'
import BackgroundWithTrees from '../../image_assets/login-signup/LoginBackgroundWithTrees.svg'
import GirlWithLaptop from '../../image_assets/login-signup/Group 122.svg'
import FormProfileIcon from '../../image_assets/login-signup/FormProfileIcon.svg'
import FormPasswordIcon from '../../image_assets/login-signup/FormPasswordIcon.svg'
import LinkedinLogin from "./LoginwithLinkedin";
import LoginGoogle from "./Loginwithgoogle";
import LoginFacebook from "./LoginwithFacebook";
import LoginwithGithub from "./LoginwithGithub";
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
        marginBottom: '5vh',
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 30px 36px #557DA526",
        borderRadius: "20px",
        padding: "20px",
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
    formTextStyle: {
        fontFamily :'Prompt',
        fontWeight: 700,
    },
    submit: {
        marginLeft: '4vw',
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
        // backgroundColor: '#05386B',
        // width: '50vw',
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
    'forgot__password' :{
        marginLeft: '13vw',
        fontFamily: 'Inter',
        color: '#05386B'
    }
}));

export default function Login() {
    const classes = useStyles();
    const [user, setUser] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");

    const history = useHistory();
    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const authContext = useContext(AuthContext);
    const clearData = () => {
        setUser({ email: "", password: "" });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        clearData();
        fetch("https://jobs-api.squareboat.info/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log("Success:", data);
                if (data.code === 200) {
                    // console.log(authContext);
                    localStorage.setItem("isAuthenticated", true);
                    localStorage.setItem("token", data.data.token);
                    localStorage.setItem("userRole", data.data.userRole);
                    localStorage.setItem("userName", data.data.name); 
                    authContext.setUser(data.data);
                    authContext.setIsAuthenticated(true);

                    if (data.data.userRole === 0) {
                        history.push("#");
                    } else {
                        history.push("#");
                    }
                } else {
                    setMessage(data.message);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className='login-items-position'>
            <img src={GirlWithLaptop} className='girl-with-laptop' />
            {window.location.pathname === '/login' ? <img src={BackgroundWithTrees} className='background-with-trees' /> : null}
            <div className='login-container'>
                <Container className={classes["login-background"]}>
                    <Container component="Login" maxWidth="xs" Style='margin-right:0vw;margin-left:0vw;padding-right:0vw;'>
                        <div className={classes.paper}>
                            <form className={classes.form} noValidate>
                                <div Style='display:flex;'>
                                    <img src={FormProfileIcon} alt='profile icon'/>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        className={classes.formTextStyle}
                                        name="email"
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={changeHandler}
                                        error={user.email === ""}
                                    />
                                </div>
                                <div Style='display:flex;'>
                                    <img src={FormPasswordIcon} alt='pswd icon'/>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        className={classes.formTextStyle}
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
                                </div>
                                <Link
                                    className={classes["forgot__password"]}
                                    href="#"
                                    variant="body2"
                                >
                                    Forgot password?
                                </Link>
                                {message && <Message text={message} />}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className={classes.submit}
                                    onClick={submitHandler}
                                >
                                    Sign in
                                </Button>
                                <div className='sign-in-using'>
                                    <span />
                                    <p>or sign in using</p>
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