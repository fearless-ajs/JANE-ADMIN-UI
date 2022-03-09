import React, {useState} from "react";
import AuthFooterComponent from "../../components/layouts/auth-footer-component";
import ForgotPasswordFormComponent
    from "../../components/page-components/auth/password-reset/forgot-password-form-component";
import SuccessMessageComponent from "../../components/page-components/auth/password-reset/success-message-component";

const ForgotPasswordPage = () => {
    const [success, setSuccess] = useState(false);
    let message = "A password reset link has been sent to the email you provided, please proceed to your inbox for further instructions";
    let iconComponent = <i className="bx bx-mail-send h2 mb-0 text-primary"/>;
    let buttonText = "Back to Home";
    let buttonTo = '/'
    return (
        <div className="authentication-bg min-vh-100">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                    <div className="row justify-content-center my-auto">
                        <div className="col-md-8 col-lg-6 col-xl-5">

                            <div className="text-center mb-4">
                                <a href="index.html">
                                    <img src="assets/images/logo-sm.svg" alt="" height="22" /> <span
                                        className="logo-txt">Jane</span>
                                </a>
                            </div>

                            {
                                (success) ? <SuccessMessageComponent
                                    iconComponent={iconComponent}
                                    buttonText={buttonText}
                                    buttonTo={buttonTo}
                                    message={message}/> :<ForgotPasswordFormComponent setSuccess={setSuccess} />
                            }

                        </div>

                    </div>


                   <AuthFooterComponent />

                </div>
            </div>

        </div>
    );
}

export default ForgotPasswordPage;