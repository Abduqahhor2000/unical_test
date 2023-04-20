import React, { useState } from "react";
// import { useAppSelector, useAppDispatch } from "../store/hooks";
// import { addTableData, clearTableData } from "../store/features/tableData";
import { useGetTableQuery } from "../store/features/apiSlice";

export default function Dashboard() {
  // const tableInfo = useAppSelector((state) => state.tableData.value);
  // const dispatch = useAppDispatch();
  const {data: tableData, isLoading, isError, error} = useGetTableQuery()

  if(isLoading){
    return <div>Loading...</div>
  }

  if(isError){
    return <div>Error</div>
  }

  return (
    <>
    {/* {console.log(data)} */}
      {tableData?.map((item) => {
        return <div>{item.full_name}</div>;
      })}
    </>
  );
}
