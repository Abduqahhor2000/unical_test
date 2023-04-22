import React, {useState} from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useGetTableQuery } from "../store/features/apiSlice";

const tulov_turlari = ["", "Naqd", "Karta", "Click", "PayMe"]

function TableList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data: tableData, isLoading } = useGetTableQuery();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (tableData) {
    return (
      <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: "550px" }}>
              <Table
                stickyHeader
                sx={{ minWidth: 650 }}
                aria-label="Table is data"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Sana</TableCell>
                    <TableCell>Pul miqdori</TableCell>
                    <TableCell>Kassir ism sharifi</TableCell>
                    <TableCell>Turi</TableCell>
                    <TableCell>Sabab</TableCell>
                    <TableCell align="center">To'lov turi</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[...tableData]
                    .reverse()
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    ?.map((item) => (
                      <TableRow key={item.id.toString()}>
                        <TableCell component="th" scope="row">
                          {new Date(item.date).getFullYear()}
                        </TableCell>
                        <TableCell>{`$${item.amount}`}</TableCell>
                        <TableCell>{item.full_name}</TableCell>
                        <TableCell>{item.type ? "Kirim" : "Chiqim"}</TableCell>
                        <TableCell>{item.comment}</TableCell>
                        <TableCell align="center">
                          {tulov_turlari[+item.transfer_type]}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={tableData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
      </>
    )
  } else {
    return <>Error</>;
  }
}

export default TableList