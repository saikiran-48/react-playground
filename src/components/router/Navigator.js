import React from "react";
import {
  BrowserRouter as Router,
  useHistory,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import DebounceSearch from "../debounce/DebounceSearch";
import EmailEditing from "../emaileditor/EmailEditing";
import GithubFinder from "../githubfinder/GithubFinder";
import "./Navigator.css";
export default function Navigator() {
  const history = useHistory();

  const logout = () => {
    history.push("/");
  };
  return (
    <Router>
      <div className="link-container">
        <nav className="navigation-bar">
          <ul>
            <li>
              <Link to="/navigator/githubfinder">Github Finder</Link>
            </li>
            <li>
              <Link to="/navigator/debouncesearch">Debounce Search</Link>
            </li>
            <li>
              <Link to="/navigator/users">Users</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>

          <p onClick={logout} className="logout">
            Logout
          </p>
        </nav>
      </div>
      <Switch>
        <Route path="/navigator/githubfinder">
          <GithubFinder />
        </Route>
        <Route path="/navigator/debouncesearch">
          <DebounceSearch />
        </Route>
        <Route path="/navigator/users">
          <EmailEditing />
        </Route>
      </Switch>
    </Router>
  );
}
