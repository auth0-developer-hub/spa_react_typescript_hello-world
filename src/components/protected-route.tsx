import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import { Route, RouteProps } from "react-router-dom";
import { Loader } from "./loader";

interface ProtectedRouteProps extends RouteProps {
  component: ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
  ...args
}) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loader />,
    })}
    {...args}
  />
);
