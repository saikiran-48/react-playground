import "./App.css";
import Login from "./components/login/Login";
import { Switch, Route } from "react-router-dom";
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
