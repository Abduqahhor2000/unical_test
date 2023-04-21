import React from "react";
import Grid from "@mui/material/Grid";
import { Link, Outlet } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TocIcon from '@mui/icons-material/Toc';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

function Menu() {
  return (
    <Grid container>
      <Grid
        item
        xs={2}
        sx={{
          height: "100vh",
          backgroundColor: "primary.dark",
        }}
      >
        <List component="nav" sx={{"marginTop": "20px"}}>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon sx={{"color": "white"}}/>
            </ListItemIcon>
            <ListItemText sx={{color: "white", padding: 0}} primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/table">
            <ListItemIcon>
              <TocIcon sx={{"color": "white"}} />
            </ListItemIcon>
            <ListItemText sx={{color: "white"}} primary="Table" />
          </ListItem>
        </List>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{
          backgroundColor: "secondary.900",
          maxHeight: "100vh",
          overflow: "auto",
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default Menu;
