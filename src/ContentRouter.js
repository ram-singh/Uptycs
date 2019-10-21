import React from "react";
import { Router } from "@reach/router";
import IntroPage from "./pages/intro/IntroPage";
import AssetsPage from "./pages/assets/AssetsPage";
// import UsersPage from "./pages/users/UsersPage";

const ContentRouter = ({ children }) => (
  <Router>
    <IntroPage path="/" />
    <AssetsPage path="assets" />
    {/* <UsersPage path="users" /> */}
  </Router>
);

export default ContentRouter;
