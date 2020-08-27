import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { DashboardPage } from "../../pages/DashboardPage";
import { AddContact } from "../../pages/DashboardPage/AddContact";
import { PageError } from "../../pages/PageError";

export const Router = () => {
  return (
    <BrowserRouter key={Router}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
        <Route exact path="/add-contact">
          <AddContact />
        </Route>
        <Route path="/">
          <PageError />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};