import React from "react";
import { HomePage, CardPage } from "../pages";
import { Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";

const App = () => {
  return (
    <div>
      <Switch>
        <Route component={HomePage} path="/home" exact></Route>
        <Route component={CardPage} path="/card" exact></Route>
        <Route render={() => <h2>Main Page</h2>} path="/" exact></Route>
      </Switch>
      <Button href="/home">Home</Button>
      <Button href="/card">Card</Button>
    </div>
  );
};

export default App;
