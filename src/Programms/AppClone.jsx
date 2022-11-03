import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Register from "./Components/Register";
import Messenger from "./Messenger";
// reducer
import { newUser } from "./reducer/userReduser";
import { useDispatch } from "react-redux";

function Routing() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(newUser(user.user));
      history.push("/message");
    } else {
      history.push("/");
    }
  }, []);
  return (
    <Switch>
      <Route path="/" exact component={Register} />
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
