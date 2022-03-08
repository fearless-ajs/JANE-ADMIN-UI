import React from "react";
import {  Switch } from "react-router-dom";
import GuestRoute from "./components/auth/routes/guest-route";
import SignInPage from "./pages/auth/sign-page";
import LandingAreaPage from "./pages/Dashboard/landing-area-page";
import AuthRoute from "./components/auth/routes/auth-route";



function App() {
  return (
      <Switch>
        <GuestRoute exact path="/sign-in" component={SignInPage} />
        <AuthRoute exact path="/dash" component={LandingAreaPage} />
      </Switch>
  );
}

export default App;
