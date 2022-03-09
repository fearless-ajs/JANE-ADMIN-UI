import React, {useState} from "react";
import {Link} from "react-router-dom";
import Auth from "../../../../models/Auth";
import Notify from "../../../../utils/Notify";
import ButtonSpinner from "../../../spinners/button-spinner.component";

const ForgotPasswordFormComponent = ({ setSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [userCredentials, setUserCredentials] = useState({
        email: '',
    });
    const { email } = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await setLoading(true);
        Auth.verifyResetPasswordEmail(email).then(response => {
            // If successful redirect t show password
           Notify.success('Reset link sent to your email');
            setLoading(false);
            setUserCredentials({ email: '' });
            setSuccess(true);
        }).catch(error => {
            console.log(error.response);
            Notify.error('Invalid email address');
            setLoading(false);
        })

    }

    return (
        <div className="card">
            <div className="card-body p-4">
                <div className="text-center mt-2">
                    <h5 className="text-primary">Reset Password</h5>
                    <p className="text-muted">Reset Password with Jane.</p>
                </div>
                <div className="p-2 mt-4">
                    <div className="alert alert-success text-center small mb-4" role="alert">
                        Enter your Email and instructions will be sent to you!
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="useremail">Email</label>
                            <input
                                type="email"
                                required
                                className="form-control"
                                id="useremail"
                                value={email}
                                onChange={handleChange}
                                name="email"
                                placeholder="Enter email" />
                        </div>

                        <div className="mt-3 text-end">
                            <button className="btn btn-primary w-sm waves-effect waves-light"
                                    type="submit"> {loading?(<ButtonSpinner />): 'Reset'}
                            </button>
                        </div>

                        <div className="mt-4 text-center">
                            <p className="mb-0">Remember It ? <Link to={'/sign-in'}
                                                                    className="fw-medium text-primary"> Sign
                                in </Link></p>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    );
}

export default ForgotPasswordFormComponent;