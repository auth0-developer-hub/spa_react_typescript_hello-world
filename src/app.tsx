import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "./components/footer";
import { NavBar } from "./components/nav-bar";
import { ExternalApi } from "./pages/external-api";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Profile } from "./pages/profile";

export const App: React.FC = () => {
  return (
    <div className="page-layout">
      <NavBar />
      <div className="page-layout__content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
