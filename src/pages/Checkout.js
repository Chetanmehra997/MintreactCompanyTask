import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";


// import { Link } from "@mui/material";
function Checkout() {
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

      <Box style={{ padding: '14rem'}}>
        <Card sx={{ minWidth: 205 }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 ,fontSize: '29px'}} >
              CheckOut 
            </Typography>
            <Typography variant="body2" style={{textAlign: 'initial',fontSize:'22px'}}>
              Thankyou For Your Order.
            </Typography>
          </CardContent>
         
        </Card>
      </Box>
    </div>
  );
}

export default Checkout;
