import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/router/Navigator";
import About from "./components/About";
import Home from "./components/Home";
import Error from "./components/Error";
import Navigator from "./components/router/Navigator";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/navigator" component={Navigator} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
