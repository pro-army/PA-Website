import React from "react";
import GitHubLogin from "react-github-login";
import axios from 'axios'

function LoginwithGithub() {
    const onSuccess = (response) => {
        axios({
            method:"POST",
            url:"http://localhost:4000/api/user/logingithub",
            data:{code:response.code}
          }).then(response=>{
      
            console.log(response.data.message.msgBody)
      
          })
          .catch(err=>console.log(err))
    }
    const onFailure = (response) => console.error(response);
    return (
        <GitHubLogin
            clientId="69ab3843cec73ec55290"
            onSuccess={onSuccess}
            onFailure={onFailure}
            redirectUri="http://localhost:3000/home"
        />
    ); 
}

export default LoginwithGithub;