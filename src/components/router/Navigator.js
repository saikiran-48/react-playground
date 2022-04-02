import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../About";
import GithubFinder from "../githubfinder/GithubFinder";
import Home from "../Home";
import "./Navigator.css";
export default function Navigator() {
  return (
    <Router>
      <div className="link-container">
        <nav>
          <ul>
            <li>
              <Link to="/navigator/githubfinder">Github Finder</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/navigator/githubfinder">
              <GithubFinder />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">{/* <Users /> */}</Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
          </Switch>
        </nav>
      </div>
    </Router>
  );
}
