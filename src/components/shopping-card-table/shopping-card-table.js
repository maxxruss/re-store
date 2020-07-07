import React from "react";
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
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  actionsWrap: {
    display: 'flex'
  },
  action: {
    float: 'right'
  },
});

const ShoppingCardTable = () => {
  const classes = useStyles();
  function createData(number, title, count, price, action) {
    return { number, title, count, price, action };
  }

  const rows = [createData(1, "Production-Ready Microservices", 2, 40, "add")];

  return (
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
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="right">{row.count}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell className={classes.actionsWrap} align="right">
                <IconButton className={classes.action}>
                  <DeleteOutlineOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton color="secondary" className={classes.action}>
                  <AddCircleOutlineOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton  color="primary" className={classes.action}>
                  <RemoveCircleOutlineOutlinedIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShoppingCardTable;
