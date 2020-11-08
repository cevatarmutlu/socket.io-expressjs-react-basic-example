import React from "react";
import {   
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import CRUD from "../components/crud";
  import Product from "../components/product";

function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CRUD} />
        <Route path="/products/:id" component={Product} />
      </Switch>
    </Router>
  );
}

export default routes();