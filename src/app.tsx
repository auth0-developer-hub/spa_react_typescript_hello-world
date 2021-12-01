import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "./components/footer";
import { Loader } from "./components/loader";
import { NavBar } from "./components/nav-bar";
import { ProtectedRoute } from "./components/protected-route";
import { ExternalApi } from "./pages/external-api";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Profile } from "./pages/profile";

export const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <Loader />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <NavBar />
      <div className="page-layout__content">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
