import React from "react";
import { connect } from "react-redux";
import {
  onAddedToCard,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
} from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  actionsWrap: {
    display: "flex",
  },
  action: {
    float: "right",
  },
  total: {
    textAlign: "right",
    fontSize: "1.3rem",
    marginRight: "10px",
    marginTop: "10px",
  },
});

const ShoppingCardTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const classes = useStyles();
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <TableRow key={id}>
        <TableCell component="th" scope="row">
          {idx + 1}
        </TableCell>
        <TableCell align="left">{title}</TableCell>
        <TableCell align="right">{count}</TableCell>
        <TableCell align="right">${total}</TableCell>
        <TableCell className={classes.actionsWrap} align="right">
          <IconButton className={classes.action} onClick={() => onDelete(id)}>
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton
            color="secondary"
            className={classes.action}
            onClick={() => onIncrease(id)}
          >
            <AddCircleOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton
            color="primary"
            className={classes.action}
            onClick={() => onDecrease(id)}
          >
            <RemoveCircleOutlineOutlinedIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{items.map((row, id) => renderRow(row, id))}</TableBody>
        </Table>
      </TableContainer>
      <div className={classes.total}>Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: onAddedToCard,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCardTable);
