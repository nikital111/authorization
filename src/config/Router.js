import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import GoogleAuth from "../components/GoogleAuth/GoogleAuth";
import FireBaseAuth from "../components/FireBaseAuth/FireBaseAuth";
import FireBaseLogin from "../components/FireBaseAuth/FireBaseLogin";
import FireBaseMain from "../components/FireBaseAuth/FireBaseMain";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/GoogleAuth" exact component={GoogleAuth} />
      <Route path="/FireBaseAuth" exact component={FireBaseAuth} />
      <Route path="/FireBaseLogin" exact component={FireBaseLogin} />
      <Route path="/FireBaseMain" exact component={FireBaseMain} />
    </Switch>
  );
};

export default Router;
