import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppBar from "./components/AppBar";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";

import { GlobalContext } from "./contexts/GlobalState";
import ProductDetail from "./pages/ProductDetail";

export default function Navigation() {
  const { product } = useContext(GlobalContext);
  return (
    <Router>
      <div>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={CartPage} />
          {!product ? (
            <Redirect to="/" />
          ) : (
            <Route path="/product/:id" component={ProductDetail} />
          )}
        </Switch>
      </div>
    </Router>
  );
}
