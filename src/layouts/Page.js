import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import ProductPage from "../pages/ProductPage.js";
import ProductsListPage from "../pages/ProductsListPage.js";
import ContactPage from "../pages/ContactPage.js";
import AdminPage from "../pages/AdminPage.js";
import ErrorPage from "../pages/ErrorPage.js";
import LoginPage from "../pages/LoginPage.js";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductsListPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={ErrorPage} />

        {/* <Route render={() => "Strona nie istnieje"} /> */}
      </Switch>
    </>
  );
};

export default Page;
