import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import AddItem from "./AddItem"

function Drawel({ text, type_trans}: {text: String; type_trans: Boolean}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);
    };

  return (
    <>
      <Button variant="contained" color={type_trans ? "success" : "error"} onClick={toggleDrawer(true)}>{text}</Button>
      <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
        <Box sx={{"width": "400px"}}>
          <Box sx={{p: 3}}>
            <Typography sx={{paddingBottom: 3, color: type_trans ? "green" : "red"}} variant="h4" component="h3">
            {text}
            </Typography>
            <AddItem type_info={type_trans} setIsOpen={setIsOpen}/>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Drawel;
