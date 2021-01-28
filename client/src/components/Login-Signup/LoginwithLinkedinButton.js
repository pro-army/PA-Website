import React from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";
import axios from "axios";
import LinkedinIcon from '../../image_assets/login-signup/LinkedinIcon.svg'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    'login-linkedin-icon': {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        boxShadow: '0 0 0 0 white',
        color: 'white',
        padding: 0,
    },
}));


function LoginwithLinkedinButton() {
    const classes = useStyles();
    const handleFailure = (response) => {
        console.log(response);
    };
    const handleSuccess = (response) => {
        console.log(response);
        axios
            .post("http://localhost:4000/api/user/login/linkedin", {
                data: { code: response.code },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <LinkedIn
                clientId="78gukwqbrxwsdg"
                onFailure={handleFailure}
                onSuccess={handleSuccess}
                redirectUri="http://localhost:3000/linkedin"
                scope="r_emailaddress,r_liteprofile"
                renderElement={({ onClick, disabled }) => (
                <button onClick={onClick} disabled={disabled}>
                    <img src={LinkedinIcon} alt='Google' className={classes['login-linkedin-icon']} />
                </button>
                )}
            />
        </div>
    );
}

export default LoginwithLinkedinButton;
