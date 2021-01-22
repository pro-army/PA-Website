import React from "react";
import GitHubLogin from "react-github-login";

function LoginwithGithub() {
    const onSuccess = (response) => console.log(response);
    const onFailure = (response) => console.error(response);
    return (
        <GitHubLogin
            clientId="69ab3843cec73ec55290"
            onSuccess={onSuccess}
            onFailure={onFailure}
            redirectUri="http://localhost:3000"
        />
    );
}

export default LoginwithGithub;
