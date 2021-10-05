import { Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom"
import {useState} from 'react'
import './App.css';
import Home from "./components/Home"
import Pages from "./components/Pages"

function App() {
  // const [previewClass, setPreviewClass] = useState('light')

  // function updateClass(id) {
  //   console.log('hi')
  //   fetch(`/themes/${id}`)
  //       .then((r) => r.json())
  //       .then((data) => setPreviewClass(data.name))
  // }

  return (
    <div className="App">
      <Router>
        <nav className="navbar-container">
          <NavLink  className="navbar-text" to="/"> Home</NavLink>
          <NavLink className="navbar-text" to="/pages"> Pages</NavLink>
        </nav> 
        <Switch>
          <Route exact path="/pages">
            <h1>pages pagee</h1>
            <Pages/>
          </Route>
          <Route exact path="/">
            <h1>hi home</h1>
            <Home/>
          </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
