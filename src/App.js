import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Login from "./screens/Login";
import Produtos from "./screens/Produtos";
import CadProducts from "./screens/CadProducts";
import CadShelves from "./screens/CadShelves";
import bitch from "./components/products/Products";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/Login/" exact component={Login} />
      <Route path="/Produtos/" exact component={Produtos} />
      <Route path="/CadProducts/" exact component={CadProducts} />
      <Route path="/CadShelves/" exact component={CadShelves} />
      {/* <Route path="/Products/" exact component={SimpleTable} /> */}
    </Router>
  );
}

export default App;
