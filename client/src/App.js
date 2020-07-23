import React, {useState, useEffect} from 'react';
import AuthContext from "./Contexts/AuthContext";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import './scss/app.scss';
import PropTypes from 'prop-types';
import $ from 'jquery';

import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import CreateCategory from "./Pages/Category/CreateCategory";
import BrowseCategories from "./Pages/Category/BrowseCategories";
import ShowCategory from "./Pages/Category/ShowCategory";
import CreateForum from "./Pages/Forum/CreateForum";
import ShowForum from "./Pages/Forum/ShowForum";
import CreateThread from "./Pages/Thread/CreateThread";
import ShowThread from "./Pages/Thread/ShowThread";
import Profile from "./Pages/Profile";
import CreatePost from "./Pages/Thread/CreatePost";

function App() {
  const [user, setUser] = useState(null);
  const [isInitiated, setIsInitiated] = useState(false);

  useEffect(() => {
    init();
  }, []);



  const init = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get('/api/auth/init', {params: {token}});
    const {user} = response.data;
    setUser(user);
    setIsInitiated(true);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("token", null);
  };

  return (
    <div>
      {isInitiated && (
          <AuthContext.Provider value={{user, setUser, handleLogout}}>
            <Router>
              <Navbar />
              <Switch>
                <Route path="/" exact>
                  <Home/>
                </Route>
                <Route path="/auth/login">
                  {!user ? <Login/> : <Redirect to="/"/>}
                </Route>
                <Route path="/auth/register">
                  {!user ? <Register/> : <Redirect to="/"/>}
                </Route>
                <Route path="/category/create">
                  {user ? <CreateCategory/> : <Redirect to="/auth/login"/>}
                </Route>
                <Route path="/category/:id">
                  <ShowCategory/>
                </Route>
                <Route path="/category">
                  <BrowseCategories/>
                </Route>
                <Route path="/forum/create/:id">
                  {user ? <CreateForum/> : <Redirect to="/auth/login"/>}
                </Route>
                <Route path="/forum/:id">
                <ShowForum/>
                </Route>
                <Route path="/thread/create/:id">
                  {user ? <CreateThread/> : <Redirect to="/auth/login"/>}
                </Route>
                <Route path="/thread/:id">
                  <ShowThread/>
                </Route>
                <Route path="/post/create/:id">
                  {user ? <CreatePost/> : <Redirect to="/auth/login"/>}
                </Route>
                <Route path='/pages/profile'>
                  {!user ? <Profile />:<Redirect to="/"/>}
                </Route>
              </Switch>
              <Footer />
            </Router>
          </AuthContext.Provider>
      )}
    </div>
  );
}

export default App;
