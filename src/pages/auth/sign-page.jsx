import React from "react";
import SignInFormComponent from "../../components/page-components/auth/sign-in/sign-in-form-component";
import AuthFooterComponent from "../../components/layouts/auth-footer-component";

const SignInPage = () => {
    return  (
      <div>
          <div className="authentication-bg min-vh-100">
              <div className="bg-overlay"></div>
              <div className="container">
                  <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                      <div className="row justify-content-center my-auto">
                          <div className="col-md-8 col-lg-6 col-xl-5">

                              <div className="text-center mb-4">
                                  <a href="index.html">
                                      <img src="assets/images/logo-sm.svg" alt="" height="22" /> <span
                                          className="logo-txt">Jane Admin</span>
                                  </a>
                              </div>

                              <div className="card">
                                  <div className="card-body p-4">
                                      <div className="text-center mt-2">
                                          <h5 className="text-primary">Welcome Back !</h5>
                                          <p className="text-muted">Sign in to continue to admin area.</p>
                                      </div>
                                      <div className="p-2 mt-4">

                                          <SignInFormComponent />

                                      </div>

                                  </div>
                              </div>

                          </div>

                      </div>

                      <AuthFooterComponent />

                  </div>
              </div>

          </div>
      </div>
    );
}

export default SignInPage;