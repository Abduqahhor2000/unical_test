// import React, { useState } from "react";
import Drawel from "./Drawel";
import { Box, Grid } from "@mui/material";
import TableList from "./TableList";

function InputAndOutput() {
  return (
    <>
      <Grid sx={{ p: 1, "display": "flex" }}>
        <Box sx={{ p: 1}}>
          <Drawel text={"Kirim qilish"} type_trans={true} />
        </Box>
        <Box sx={{ p: 1}}>
          <Drawel text={"Chiqim qilish"} type_trans={false} />
        </Box>
      </Grid>
      <Grid sx={{ p: "0 16px 16px 16px" }}>
        <TableList />
      </Grid>
    </>
  );
}

export default InputAndOutput;
