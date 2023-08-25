import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Link
} from "react-router-dom";
// import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import jsonData from "../data.json"; // Import JS

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Items() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [products, setProducts] = useState([]);



  useEffect(() => {
    // Fetching from JSON data (no API call needed)
    setProducts(jsonData);
  }, []);

  console.log(products, "1234");

  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        return [...prevCart];
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

 

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
        
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
  };

 
    // ... Your existing code ...
  
    // Function to calculate the total number of items in the cart
    const getTotalItems = () => {
      return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const removeFromCart = (productId) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const decreaseCartItemQuantity = (productId) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        )
      );
    };
    const updateQuantityOrRemove = (productId, quantity) => {
      if (quantity > 1) {
        decreaseCartItemQuantity(productId);
      } else {
        removeFromCart(productId);
      }
    };

    const getTotalPrice = () => {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

  return (
    <div className="App" style={{ background: "darkblu" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "darkblue" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              Food's Restaurant
            </Typography>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button onClick={handleOpen}>
              <AddShoppingCartIcon />
              {getTotalItems()}
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Box>Order Summary</Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {cart.map((product) => (
                    <li key={product.id}>
                      <Box style={{display: 'flex',justifyContent: 'space-between',}}>
                        <Box> {product.name} - {product.quantity}</Box>
                     <Box>
                     <Button variant="contained" size="small" style={{ background: "darkblue" }} onClick={() => addToCart(product)}>+</Button>
                      <Button variant="contained" size="small" style={{background: 'crimson'}} onClick={() => decreaseQuantity(product.id)}>
                        -
                      </Button>
                     </Box>
                     
                      </Box>

                    </li>
                  ))}
                </Typography>
                <Typography variant="h6">
            Total (INR): {getTotalPrice()} {/* Display total price */}
          </Typography>

          <Box style={{textAlign: 'end',}}>
          <Link to="/checkout" style={{textDecoration:'none'}}>
          <Button variant="contained" size="small">
            SAVE AND CHECKOUT
            </Button>
            </Link>
            <Button variant="text" size="small">
            CANCEL
            </Button>

          </Box>
              </Box>
            </Modal>
          </Toolbar>
        </AppBar>
      </Box>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{ minWidth: 275, margin: "10px", flex: "1" }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={product.image}
              title="green iguana"
            />
            {product.image}
            <CardContent>
              <Box>{product.name}</Box>
              <br />
              <Box>Price: {product.price}</Box>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" style={{ background: "darkblue" }} onClick={() => addToCart(product)}>+</Button>
              <Button variant="contained" size="small" style={{background: 'crimson'}} onClick={() => updateQuantityOrRemove(product.id, product.quantity)}>
                -
              </Button>
      
           
            </CardActions>
          </Card>
        ))}
      </div>

     
    </div>
  );
}

export default Items;
