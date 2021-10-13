import React from "react";
// import ProductForm from "./components/ProductForm";
import "./App.css";
import AuthorForm from "./components/AuthorForm";
import Display from "./components/Display";
import Edit from "./components/Edit";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthorForm path="/new" />
        <Display path="/" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
