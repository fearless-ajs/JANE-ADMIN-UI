import React, {useState} from "react";
import {Link} from "react-router-dom";

const SuccessMessageComponent = ({ message, iconComponent, buttonText, buttonTo }) => {

    return (
        <div className="card">
            <div className="card-body p-4">
                <div className="text-center mt-3">
                    <div className="avatar-lg mx-auto">
                        <div className="avatar-title rounded-circle bg-light">
                            {iconComponent}
                        </div>
                    </div>
                    <div className="mt-4 pt-2">
                        <h4>Success !</h4>
                        <p className="text-muted">{message}</p>
                        <div className="mt-4">
                            <Link to={buttonTo} className="btn btn-primary w-100">{buttonText}</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SuccessMessageComponent;