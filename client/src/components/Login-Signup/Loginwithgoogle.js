import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios'
import GoogleIcon from '../../image_assets/login-signup/GoogleIcon.svg'
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    'login-google-icon': {
        // width: '1vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        borderStyle: 'none',
        buttonStyle: 'none',
        boxShadow: '0px 0px 0px 0px white',
        color: 'white',
        cursor: 'pointer',
        padding: '0px',
    },
}));
function LoginGoogle() {
  const classes = useStyles();
  const history = useHistory();

    const responseSuccessGoogle=(response)=>{
      
        axios({
          method:"POST",
          url:"https://programmers-army-dev-backend.herokuapp.com/api/user/login/google",
          data:{tokenId:response.tokenId,googleId:response.googleId}
        }).then(response=>{
          console.log(response);
          localStorage.setItem("isAuthenticated", true);
          console.log(response.data.token);
          localStorage.setItem("token", response.data.token);
          history.push("/");
        })
        .catch(err=>console.log(err))
      }
    
      const responseFailureGoogle=(response)=>{
        console.log(response)
      }
    
    return (
        <div className={classes['login-google-icon']} Style=''>
            <GoogleLogin
            clientId="603299777654-ejrbu45mkh8a4n5q0tvlko2c0mj395vi.apps.googleusercontent.com"
            onSuccess={responseSuccessGoogle}
            onFailure={responseFailureGoogle}
            cookiePolicy={'single_host_origin'}
            icon={false}
            buttonText=""
            className={classes['login-google-icon']}
            >
              <img src={GoogleIcon} alt='Google' className={classes['login-google-icon']} />
            </GoogleLogin>
        </div>
    );
}

export default LoginGoogle;
