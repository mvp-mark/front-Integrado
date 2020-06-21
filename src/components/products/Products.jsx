import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from "../../services/api";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




export default function SimpleTable() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    async function loadItems() {
      const response = await api.get("/products");

      setProducts(response.data);
    }
    loadItems();
  }, []);
  // const rows = products.map((product) =>
  //   [
  //     createData(
  //       product.name, product.sku, product.endereco, product.quantity
  //     )
  //   ]);


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome do Produto</TableCell>
            <TableCell align="right">SKU</TableCell>
            <TableCell align="right">Local</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Posição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">{product.name}</TableCell>
              <TableCell align="right">{product.sku}</TableCell>
              <TableCell align="right">{product.endereco}</TableCell>
              <TableCell align="right">{product.position}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}