// import React,{useState} from "react";
// // import Box from '@mui/material/Box';
// import {user_login} from "../Auth"
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import {  useNavigate } from "react-router-dom";
// function Login() {
// const navigate = useNavigate()

//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')

//   function log(){
//    let value ={email,password}
//    user_login(value).then((res) => {
//     console.log(res,123)
//     navigate('/home')
//    }).catch((err) => {
//     console.log('err',err.response.data.message)
//    })

//   };

//   return (
//     <div className="App" style={{ marginTop: '10rem'}}>
//       <h3>Login Page</h3>

//       <TextField
//         id="outlined-basic"
//         label="Email"
//         variant="outlined"
//         size="small"
//         style={{ marginBottom: "1rem" }}
//         onChange={(e) => {
//           setEmail(e.target.value)
//         }}
//       />
//       <br />
//       <TextField
//         id="outlined-basic"
//         label="Password"
//         variant="outlined"
//         size="small"
//         style={{ marginBottom: "1rem" }}
//         onChange={(e) => {
//           setPassword(e.target.value)
//         }}
//       />
//       <br />
//       <Button variant="contained" onClick={log}>Login</Button>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError(""); // Clear previous errors

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/users", {
        params: { email, password }
      });

      const user = response.data[0]; // Assuming email is unique

      if (user) {
        console.log("Login successful");
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Error during login. Please try again.");
    }
  };

  return (
    <div className="App" style={{ marginTop: "10rem" }}>
      <h3>Login Page</h3>
      <TextField
        id="outlined-basic-email"
        label="Email"
        variant="outlined"
        size="small"
        style={{ marginBottom: "1rem" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <TextField
        id="outlined-basic-password"
        label="Password"
        variant="outlined"
        size="small"
        type="password"
        style={{ marginBottom: "1rem" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
