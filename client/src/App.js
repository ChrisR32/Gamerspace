import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import axios from "axios";
import AppContext from './Contexts/AppContext';
import Navbar from "./Components/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import "./Components/Page/Page.css";
import "./Components/Form/Form.css";
import Register from './Pages/Register/Register';

function App() {
  const [user, setUser] = useState(null);
  const [isInitiated, setIsInitiated] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const token = localStorage.getItem("token");
    const {data} = await axios.get('api/user/init?token='+token);
    setUser(data.user);
    setIsInitiated(true);
  };

  return (
    <div>
      <AppContext.Provider value={{user, setUser}}>
      <Router>
              <Navbar />
              <Switch>
                <Route path="/" exact>
                  <Home/>
                </Route>
                <Route path="/auth/register">
                  {!user ? <Register/> : <Redirect to="/"/>}
                </Route>
              </Switch>
            </Router>
      </AppContext.Provider>
    </div>
  );
  }

export default App;
