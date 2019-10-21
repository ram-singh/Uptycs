import React, {useState} from "react";
import {PAGE_OPTIONS} from '../config';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from '@material-ui/core/TablePagination';
const useStyles = makeStyles({
  headerCell: {
    fontWeight: props => props.headerCellFontWeight,
  }
});
// TODO - implement table following configuration passed within AssetsTable
function UptycsTable(props) {
  const classes = useStyles(props);
  const {data=[], columns=[], isPagination=false } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const renderTableHeader = () => {
    console.log('renderTableHeader...');
    return (<TableRow>
              {columns.map(column => (
                  <TableCell className={classes.headerCell}
                    key={column.id}
                  >
                    {column.label}
                  </TableCell>
                ))}
    </TableRow>);
  }
  const renderTableBody = () => {
    console.log('render table body...');
    return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
      return (
        <TableRow hover tabIndex={-1} key={row.id}>
          {columns.map((column, index) => {
            const value = row[column.id];
            return (
              <TableCell key={`${row.id}${index+1}`}>
                {column.render ? column.render(value) : value}
              </TableCell>
            );
          })}
        </TableRow>
      );
    })
  }

  const renderTablePagination = () => {
    if(isPagination){
      return <TablePagination
              rowsPerPageOptions={PAGE_OPTIONS}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                'aria-label': 'previous page',
              }}
              nextIconButtonProps={{
                'aria-label': 'next page',
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />;
    } else {
      return <span></span>;
    }
  }
  return (
    <>
      <Table>
        <TableHead>{renderTableHeader()}</TableHead>
        <TableBody>{renderTableBody()}</TableBody>
      </Table>
      {renderTablePagination()}
    </>
  );
}

export default UptycsTable;
