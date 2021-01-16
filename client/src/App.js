import React from 'react';
import "./App.css";
import LinkedinLogin from "./components/LoginwithLinkedin";
import LoginGoogle from './components/Loginwithgoogle';
import LoginFacebook from './components/Loginwithfacebook'


function App() {
    return (
        <div className="App">
            <LinkedinLogin />
            <LoginGoogle />
            <LoginFacebook/>
        </div>
    );
}

export default App;
