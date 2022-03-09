import React, {useState} from "react";
import AuthFooterComponent from "../../components/layouts/auth-footer-component";
import SuccessMessageComponent from "../../components/page-components/auth/password-reset/success-message-component";
import ChooseNewPasswordFormComponent
    from "../../components/page-components/auth/password-reset/choose-new-password-form-component";

const ChooseNewPasswordPage = () => {
    const [success, setSuccess] = useState(false);
    let message = "Your password has been reset successfully, you can proceed to login with your new password";
    let iconComponent =  <i className="fa fa-thumbs-up" style={{ fontSize: "30px" }} />;
    let buttonText = "Back to Login";
    let buttonTo = '/sign-in'

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
                                    message={message}
                                    iconComponent={iconComponent}
                                    buttonTo={buttonTo}
                                    buttonText={buttonText}
                                /> :<ChooseNewPasswordFormComponent setSuccess={setSuccess} />
                            }

                        </div>

                    </div>


                   <AuthFooterComponent />

                </div>
            </div>

        </div>
    );
}

export default ChooseNewPasswordPage;