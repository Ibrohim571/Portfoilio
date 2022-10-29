import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Register from "./Components/Register";
import Messenger from "./Messenger";

function Routing() {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("Nimadir");
    } else {
      history.push("/");
    }
  }, []);
  return (
    <Switch>
      <Route path="/" component={Register} />
      <Route path="/message" component={Messenger} />
    </Switch>
  );
}

function AppClone() {
  return (
    <>
      <div className="p-0 m-0 box-border overflow-hidden">
        <Router>
          <Routing />
        </Router>
      </div>
    </>
  );
}

export default AppClone;
