import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Link
} from "react-router-dom";
// import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { Link } from "@mui/material";
function Home() {
  return (
    <div className="App" style={{ background: "darkblu" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "darkblue" }}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Food's Restaurant
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box style={{ padding: "5rem" }}>
        <Box style={{ fontSize: "33px" }}>Wel Come to Food's</Box>
        <Box style={{ fontSize: "33px" }}>Kitchen</Box>
      </Box>

<Link to="/items">
<Button variant="contained" style={{ background: "darkblue" }}>Go To Menu</Button>

</Link>
     
    </div>
  );
}

export default Home;
