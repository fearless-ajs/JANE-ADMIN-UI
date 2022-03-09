import React from "react";
import {Link} from "react-router-dom";
import System from "../../models/System";

const PageNotFoundPage = () => {

    return(
        <div className="authentication-bg min-vh-100" style={{ backgroundImage: `url(${System.adminUiImagePath('auth-bg.jpg')}) bottom` }}>
            <div className="bg-overlay bg-light"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="home-wrapper text-center">
                            <div>
                                <div className="row justify-content-center">
                                    <div className="col-sm-9">
                                        <div className="error-img">
                                            <img src="assets/images/404-img.png" alt=""
                                                 className="img-fluid mx-auto d-block" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-uppercase mt-5">Sorry, page not found</h4>
                            <p className="text-muted">We are unable to find the page you are looking for, please try again some other time.</p>
                            <div className="mt-5">
                                <Link className="btn btn-primary waves-effect waves-light" to={'/'}>Back to
                                    Dashboard</Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default PageNotFoundPage;
