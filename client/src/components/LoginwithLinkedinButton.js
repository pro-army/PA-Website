import React from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";
function LoginwithLinkedinButton() {
    const handleFailure = (response) => {
        console.log(response);
    };
    const handleSuccess = (response) => {
        console.log(response);
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
                        Login with LinkedIn
                    </button>
                )}
            />
        </div>
    );
}

export default LoginwithLinkedinButton;
