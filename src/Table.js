import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CustomizedTables(props) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Brand</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Discount(%)</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Rating</StyledTableCell>
            <StyledTableCell>Stock</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.brand}
              </StyledTableCell>
              <StyledTableCell>{row.description}</StyledTableCell>
              <StyledTableCell>{row.category}</StyledTableCell>
              <StyledTableCell>{row.discountPercentage}</StyledTableCell>
              <StyledTableCell>{row.price}</StyledTableCell>
              <StyledTableCell>{row.rating}</StyledTableCell>
              <StyledTableCell>{row.stock}</StyledTableCell>
              <StyledTableCell>{row.title}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables;
