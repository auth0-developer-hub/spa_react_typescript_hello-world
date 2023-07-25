import React from "react";
import { Auth0Features } from "src/components/auth0-features";
import { HeroBanner } from "src/components/hero-banner";
import { PageLayout } from "../components/page-layout";

export const HomePage: React.FC = () => (
  <PageLayout>
    <>
      <HeroBanner />
      <Auth0Features />
    </>
  </PageLayout>
);
