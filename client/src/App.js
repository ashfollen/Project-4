import { Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom"
import {useState, useEffect} from 'react'
import './App.css';
import Home from "./components/Home"
import Pages from "./components/Pages"
import LoginPage from "./components/LoginPage"

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setCurrentUser(user)
          setLoggedIn(true)
        });
      }
    });
  }, []);

  function onLogout() {
    setLoggedIn(false)
    setCurrentUser(null)
  }

  function setUser(user) {

    setCurrentUser(user)
    setLoggedIn(true)

  }

  function handleLogout(e) {
    e.preventDefault()
    fetch("/logout", {
    method: "DELETE",
    }).then(() => onLogout());
  }

  return (

    <div className="App">
    {loggedIn ? 
      <Router>
        <nav className="navbar-container">
          <h2>Welcome, {currentUser.username}!</h2>
          <NavLink  className="navbar-text" to="/"> BUILD </NavLink>
          <NavLink className="navbar-text" to="/pages"> PAGES </NavLink>
          <button onClick={handleLogout}>Logout</button>
        </nav> 
        <Switch>
          <Route exact path="/pages">
            <Pages currentUser={currentUser}/>
          </Route>
          <Route exact path="/">
            <Home onLogout={onLogout} currentUser={currentUser}/>
          </Route>
        </Switch> 
      </Router> :
      <LoginPage setUser={setUser}/>
    }
    </div>

  );
}

export default App;
