/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "30px",
  },
  image: {
    width: "120px",
    marginRight: "30px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: "10px",
    alignItems: "flex-start"
  },
  title:{
    fontSize: '1.2rem',
    textDecoration:'none'
  },
  price:{
    fontSize: "1.4rem"
  }
});

const BookListItem = ({ book }) => {
  const classes = useStyles();
  const { title, author, price, coverImage } = book;
  return (
    <div className={classes.root}>
      <img className={classes.image} src={coverImage} alt="avatar" />
      <div className={classes.details}>
        <a href='#' className={classes.title}>{title}</a>
        <div>{author}</div>
        <div className={classes.price}>${price}</div>
        <Button variant="contained" color="primary">Add to card</Button>
      </div>
    </div>
  );
};

export default BookListItem;
