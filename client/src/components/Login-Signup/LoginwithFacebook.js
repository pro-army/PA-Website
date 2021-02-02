import React from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import FacebookIcon from '../../image_assets/login-signup/FacebookIcon.svg'
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    'login-facebook-icon': {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        border: 'none',
        buttonStyle: 'none',
        boxShadow: '0 0 0 0 white',
        color: 'white',
        cursor: 'pointer',
        padding: 0,
    },
}));

function LoginwithFacebook() {
    const classes = useStyles();
    const history = useHistory();
    const responseFacebook = (response) => {
        console.log(response);
        axios({
            method: "POST",
            url: "https://programmers-army-dev-backend.herokuapp.com/api/user/login/facebook",
            data: {
                accessToken: response.accessToken,
                userID: response.userID,
            },
        })
            .then((response) => {
                console.log(response);
                localStorage.setItem("isAuthenticated", true);
                console.log(response.data.token);
                localStorage.setItem("token", response.data.token);
                // history.push("/");
                history.push("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <FacebookLogin
                appId="1793279934167709"
                autoLoad={false}
                // onClick={componentClicked}
                callback={responseFacebook}
                icon={<img className={classes['login-facebook-icon']} src={FacebookIcon} alt='Facebook' />}
                textButton=""
                cssClass={classes['login-facebook-icon']}
            >
            </FacebookLogin>
        </div>
    );
}

export default LoginwithFacebook;
