import React from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import FacebookIcon from '../../image_assets/login-signup/FacebookIcon.svg'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    'login-facebook-icon': {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        boxShadow: '0 0 0 0 white',
        color: 'white',
        padding: 0,
    },
}));

function LoginwithFacebook() {
    const classes = useStyles();
    const responseFacebook = (response) => {
        console.log(response);
        axios({
            method: "POST",
            url: "http://localhost:4000/api/user/login/facebook",
            data: {
                accessToken: response.accessToken,
                userID: response.userID,
            },
        })
            .then((response) => {
                console.log(response);
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
                icon={<img className={classes['login-facebook-icon']} src={FacebookIcon} alt='Google' />}
                textButton=""
                cssClass={classes['login-facebook-icon']}
            >
            </FacebookLogin>
        </div>
    );
}

export default LoginwithFacebook;
