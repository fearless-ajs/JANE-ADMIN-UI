import React from "react";
import {  Switch } from "react-router-dom";
import GuestRoute from "./components/routing/guest-route";
import SignInPage from "./pages/auth/sign-page";
import LandingAreaPage from "./pages/dashboard/landing-area-page";
import AuthRoute from "./components/routing/auth-route";
import ForgotPasswordPage from "./pages/auth/forgot-password-page";
import ChooseNewPasswordPage from "./pages/auth/choose-new-password-page";
import PageNotFoundPage from "./pages/dashboard/page-not-found-page";
import SettingsPage from "./pages/dashboard/settings-page";



function App() {
  return (
      <Switch>
        <GuestRoute exact path="/sign-in" component={SignInPage} />
        <GuestRoute exact path="/forgot-password" component={ForgotPasswordPage} />
        <GuestRoute exact path="/choose-password/:resetToken" component={ChooseNewPasswordPage} />
        <AuthRoute exact path="/" component={LandingAreaPage} />
        <AuthRoute exact path="/settings" component={SettingsPage} />


        <AuthRoute exact path="*" component={PageNotFoundPage} />
      </Switch>
  );
}

export default App;
