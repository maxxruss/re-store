import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    fontFamily: "Playfair Display, Georgia, serif",
    fontSize: "2.5rem"
  },
  itemName: {
    margin: "15px",
  },
  total: {
    margin: "15px",
  },
});

const ShopHeader = ({ numitems = 0, total = 0 }) => {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Re-store
          </Typography>
          <Icon>shopping_cart</Icon>
          <div className={classes.itemName}>{numitems} items</div>
          <div>({total} $)</div>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default ShopHeader;
