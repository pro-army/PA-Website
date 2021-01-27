import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../css/signup.css";
import { AuthContext } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";
import LinkedinLogin from "./LoginwithLinkedin";
import LoginGoogle from "./Loginwithgoogle";
import LoginFacebook from "./LoginwithFacebook";
import LoginwithGithub from "./LoginwithGithub";
import Message from "./Message";

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
    submit: {
        marginTop: '8vh',
        marginLeft: '7vw',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        color: 'white',
        background: "#05386B",
        fontFamily: 'Prompt, sans-serif',
        margin: theme.spacing(3, 0, 2),
        marginBottom: "30px",
        fontWeight: '700',
    },
    'login-background': {
        marginTop: '1vh',
        borderRadius: '15px',
        backgroundColor: '#05386B',
        width: '40vw',
        paddingTop: '1vh',
        paddingBottom: '10vh',
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
        <div className='login-signup-container'>
            <Container className={classes["login-background"]}>
                <div className='login-card-green-dot-1' />
                <Container component="Signup" maxWidth="sm">
                    <div className={classes.paper}>

                        <form className={classes.form} noValidate>
                            <span Style="color:black;">Full Name*</span>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Enter your full name"
                                name="name"
                                value={user.name}
                                onChange={changeHandler}
                                error={user.name === ""}
                            />
                            {!user.name && <Message text="This field is mandatory" />}
                            <span Style="color:black;">Email Address*</span>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Enter your email"
                                value={user.email}
                                name="email"
                                autoComplete="off"
                                onChange={changeHandler}
                                error={user.email === ""}
                            />
                            {!isEmail(user.email) 
                            && 
                            (
                                <Message text="Enter a valid email" />
                            )
                            }
                            <div Style="display:flex;">
                                <div className="password__field">
                                    <div Style="color:black;display:flex;">
                                        Create Password*
                                    </div>
                                    <div Style="">
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required="true"
                                            name="password"
                                            label="enter your password"
                                            type="password"
                                            id="password"
                                            onChange={changeHandler}
                                            value={user.password}
                                            error={user.password === ""}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="password__field"
                                    Style="padding-left:2vw;"
                                >
                                    <div Style="color:black;display:flex;">
                                        Confirm Password*
                                    </div>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        name="confirmPassword"
                                        label="confirm your password"
                                        type="password"
                                        id="confirmPassword"
                                        value={user.confirmPassword}
                                        onChange={changeHandler}
                                        error={user.confirmPassword === ""}
                                    />
                                    {
                                    user.password !== user.confirmPassword && (
                                        <Message text="Password Doesn't Match" />
                                    )
                                    }
                                </div>
                            </div>
                            
                            {message.length ? (
                                <Message text={"Fill in correct Details"} />
                            ) : null}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={submitHandler}
                            >
                                Signup
                            </Button>

                            <LinkedinLogin />
                            <LoginGoogle />
                            <LoginFacebook />
                            <LoginwithGithub />
                        </form>
                    </div>
                    <div className='login-card-green-dot-2' />
                    <div className='login-card-green-dot-3' />
                </Container>
            </Container>
            <div className='login-signin-button-container'>
                <Link href="./login">
                    <div className="login-signin-button-text login-button">Login</div>
                </Link>
                <Link href="./signup">
                    <div className="login-signin-button-text signin-button">Signup</div>
                </Link>
            </div>
        </div>
    );
}