import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { HomePage, CardPage } from "../pages";
import { Route, Switch } from "react-router-dom";
import ShopHeader from "../shop-header";

const useStyles = makeStyles({
  root: {
    display: "block",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ShopHeader numitems={5} total={210} />
      <Container>
        <Switch>
          <Route component={HomePage} path="/" exact></Route>
          <Route component={CardPage} path="/card" exact></Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
