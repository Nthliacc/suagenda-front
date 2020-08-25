import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { DashboardPage } from "../../pages/DashboardPage";

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
        <Route path="/">
          Error 404!!
        </Route>
      </Switch>
    </BrowserRouter>
  );
};