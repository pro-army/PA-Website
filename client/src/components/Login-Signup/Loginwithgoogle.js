import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios'
import GoogleIcon from '../../image_assets/login-signup/GoogleIcon.svg'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    'login-google-icon': {
        // width: '1vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        borderStyle: 'none',
        buttonStyle: 'none',
        boxShadow: '0 0 0 0 white',
        color: 'white',
        cursor: 'pointer',
        padding: '0px',
    },
}));
function LoginGoogle() {
  const classes = useStyles();
    const responseSuccessGoogle=(response)=>{
      
        axios({
          method:"POST",
          url:"http://localhost:4000/api/user/login/google",
          data:{tokenId:response.tokenId,googleId:response.googleId}
        }).then(response=>{
    
          console.log(response.data.message)
          console.log(response.data.user)
    
        })
        .catch(err=>console.log(err))
      }
    
      const responseFailureGoogle=(response)=>{
        console.log(response)
      }
    
    return (
        <div>
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
