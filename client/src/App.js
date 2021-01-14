import React from 'react';
import "./App.css";
import LinkedinLogin from "./components/LoginwithLinkedin";
import LoginGoogle from './components/Loginwithgoogle';


function App() {
    return (
        <div className="App">
            <LinkedinLogin />
            <LoginGoogle />
        </div>
    );
}

export default App;
