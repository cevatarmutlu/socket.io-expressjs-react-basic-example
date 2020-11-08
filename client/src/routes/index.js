import React from "react";
import {   
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import CRUD from "../components/crud";
  import Product from "../components/product";
  import EDIT from "../components/editProduct";
  import ADD from "../components/addProduct";

function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CRUD} />
        <Route path="/products/:id" component={Product} />
        <Route path="/edit/:id" component={EDIT} />
        <Route path="/add" component={ADD} />
      </Switch>
    </Router>
  );
}

export default routes();