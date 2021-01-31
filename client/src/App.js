import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile_page from './components/Profile_Page/Profile_page'
import Article_page from './components/Article_Page/Article_page'
import NavBar from './components/NavBar/NavBar'
import Login from './components/Login-Signup/Login'
import Signup from './components/Login-Signup/Signup'
import HomeMain from './components/HomePage/home/HomeMain'
import React, { useState, useContext } from "react";
import { AuthContext } from "./components/Context/AuthContext";
import Footer from './components/Footer/Footer'

export default function App() {
  const [data, setData] = useState([]);
    const authContext = useContext(AuthContext);
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userName = localStorage.getItem("userName");

    const handleLogout = (e) => {
        console.log("logout");
        localStorage.setItem("isAuthenticated", false);
        localStorage.setItem("token", "");
        localStorage.setItem("userRole", null);
        localStorage.setItem("userName", "");
    };
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/profile-page" component={Profile_page} />
          <Route exact path="/article-page" component={Article_page} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={HomeMain} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}