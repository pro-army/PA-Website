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
// import base from '../../image_assets/login-signup/'
import LinkedinLogin from "./LoginwithLinkedin";
import LoginGoogle from "./Loginwithgoogle";
import LoginFacebook from "./LoginwithFacebook";
import LoginwithGithub from "./LoginwithGithub";

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
        marginLeft: '3vw',
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
        <div className='login-signup-container'>
        <Container className={classes["login-background"]}>
            <div className='login-card-green-dot-1' />
            <Container component="Login" maxWidth="xs">
                <div className={classes.paper}>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="off"
                            value={user.email}
                            onChange={changeHandler}
                            error={user.email === ""}
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
                        <Link
                            className="forgot__password"
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