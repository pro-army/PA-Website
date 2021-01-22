import React from "react";
import "./App.css";
import LinkedinLogin from "./components/LoginwithLinkedin";
<<<<<<< HEAD
import LoginGoogle from './components/Loginwithgoogle';
import LoginFacebook from './components/Loginwithfacebook'
import Loginwithgithub  from './components/Loginwithgithub'

=======
import LoginGoogle from "./components/Loginwithgoogle";
import LoginFacebook from "./components/LoginwithFacebook";
import LoginwithGithub from "./components/LoginwithGithub";
>>>>>>> 8d5ae399e7d0e3990b2c83e71f1c6e48dfe38f05

function App() {
    return (
        <div className="App">
            <LinkedinLogin />
            <LoginGoogle />
<<<<<<< HEAD
            <LoginFacebook/>
            <Loginwithgithub/>
=======
            <LoginFacebook />
            <LoginwithGithub />
>>>>>>> 8d5ae399e7d0e3990b2c83e71f1c6e48dfe38f05
        </div>
    );
}

export default App;
