import React, { useState } from "react";
import Button from '@mui/material/Button';
// import { useAppSelector, useAppDispatch } from "../store/hooks";
// import { addTableData, clearTableData } from "../store/features/tableData";
// import {
//   useAddTableItemMutation,
//   useGetTableQuery,
// } from "../store/features/apiSlice";

export default function Dashboard() {
  // const tableInfo = useAppSelector((state) => state.tableData.value);
  // const dispatch = useAppDispatch();
  // const [tableItem, setTableItem] = useState<string>("");
  // const { data: tableData, isLoading, isError } = useGetTableQuery();
  // const [addTableItem] = useAddTableItemMutation();

  // function addHandler() {
  //   addTableItem({
  //     id: new Date().getTime(),
  //     date: new Date(),
  //     amount: "45$",
  //     full_name: "Abduqahhor Norimmatov",
  //     type: false,
  //     comment: tableItem,
  //     transfer_type: 2,
  //   });
  //   setTableItem("");
  // }

  return (
    <>
      <div>Dashboard</div>
      <Button variant="contained">Salomlar</Button>
    </>
  );
}
