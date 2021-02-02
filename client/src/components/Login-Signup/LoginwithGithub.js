import React from "react";
import GitHubLogin from "react-github-login";
import axios from "axios";
import GithubIcon from '../../image_assets/login-signup/GithubIcon.svg'
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    'login-github-icon': {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        border: 'none',
        buttonStyle: 'none',
        boxShadow: '0 0 0 0 white',
        cursor: 'pointer',
        color: 'white',
        padding: 0,
    },
}));
function LoginwithGithub() {
    const classes = useStyles();
    const history = useHistory();
    const onSuccess = (response) => {
        console.log(response);
        axios({
            method: "POST",
            url: "https://programmers-army-dev-backend.herokuapp.com/api/user/login/github",
            data: { code: response.code },
        })
            .then((response) => {
                console.log(response);
                localStorage.setItem("isAuthenticated", true);
                console.log(response.data.token);
                localStorage.setItem("token", response.data.token);
                history.push("/");
            })
            .catch((err) => console.log(err));
    };
    const onFailure = (response) => console.error(response);
    return (
        <GitHubLogin
            clientId="69ab3843cec73ec55290"
            onSuccess={onSuccess}
            onFailure={onFailure}
            scope={"read:user,user:email"}
            redirectUri="http://localhost:3000"
            buttonText=""
            className={classes['login-github-icon']}
        >
            <img className={classes['login-github-icon']} src={GithubIcon} alt='Github' />
        </GitHubLogin>
    );
}

export default LoginwithGithub;
