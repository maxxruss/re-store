import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  title: {
    fontFamily: "Playfair Display, Georgia, serif",
    fontSize: "2.5rem",
    color: "white",
  },
  titleRoot: {
    flexGrow: 1    
  },
  itemName: {
    margin: "15px",
  },
  shoppingIcon: {
    color: "white",
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
          <Typography className={classes.titleRoot} component="h1" variant="h6" color="inherit" noWrap>
            <Link className={classes.title} underline="none" href="/">
              Re-store
            </Link>
          </Typography>
          <Link className={classes.shoppingIcon} href="/card">
            <Icon>shopping_cart</Icon>
          </Link>
          <div className={classes.itemName}>{numitems} items</div>
          <div>({total} $)</div>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default ShopHeader;
