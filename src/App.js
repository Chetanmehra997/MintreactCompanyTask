// import logo from './logo.svg';
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./pages/Items";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <div className="App">
      {/* <Login/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
