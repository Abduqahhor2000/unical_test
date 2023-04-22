import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useGetTableQuery } from "../store/features/apiSlice";
import moment from "moment";

const tulov_turlari = [
  <img src="" alt="nothing"></img>,
  <img width={80} height={25} style={{objectFit: "cover"}} src="/cash_1.png" alt="Naqd"></img>,
  <img width={80} height={25} style={{objectFit: "cover"}} src="/uzcard_1.png" alt="Karta"></img>,
  <img width={80} height={25} style={{objectFit: "cover"}} src="/Click-01.png" alt="Click"></img>,
  <img width={80} height={25} style={{objectFit: "cover"}} src="/payme-01.png" alt="PayMe"></img>,
];

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
                        {moment(item.date).format("DD MMM YYYY")}
                      </TableCell>
                      <TableCell>{item.type ? <b style={{"color": "green"}}>{`+$${item.amount}`}</b> : <b style={{"color": "red"}}>{`-$${item.amount}`}</b>}</TableCell>
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
    );
  } else {
    return <>Error</>;
  }
}

export default TableList;
