import React, { Fragment } from "react";
import { HeroBanner } from "src/components/hero-banner";
import { Auth0Features } from "src/components/auth0-features";

export const Home = () => (
  <Fragment>
    <HeroBanner />
    <Auth0Features />
  </Fragment>
);
