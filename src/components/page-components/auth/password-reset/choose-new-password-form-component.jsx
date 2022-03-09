import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";
import Auth from "../../../../models/Auth";
import Notify from "../../../../utils/Notify";
import ButtonSpinner from "../../../spinners/button-spinner.component";

const ChooseNewPasswordFormComponent = ({ setSuccess, match }) => {
    const [loading, setLoading] = useState(false);
    const [userCredentials, setUserCredentials] = useState({
        password: '',
        passwordConfirm: ''
    });
    const { password, passwordConfirm } = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (password !== passwordConfirm){
            Notify.error('Password does not match');
            return setLoading(false);
        }
        await Auth.chooseNewPassword(match.params.resetToken, password, passwordConfirm).then(response => {
            Notify.success('Password reset successful')
            setSuccess(true);
            setLoading(false);
        }).catch(error => {
            Notify.error('Reset error')
            setLoading(false);
        });

    }

    return (
        <div className="card">
            <div className="card-body p-4">
                <div className="text-center mt-2">
                    <h5 className="text-primary">New Password</h5>
                    <p className="text-muted">Change your old password.</p>
                </div>
                <div className="p-2 mt-4">
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="useremail">Password</label>
                            <input
                                type="password"
                                required
                                className="form-control"
                                id="useremail"
                                value={password}
                                onChange={handleChange}
                                name="password"
                                placeholder="Enter password" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="useremail">Confirm password</label>
                            <input
                                type="password"
                                placeholder="Confirm password"
                                name="passwordConfirm"
                                required
                                className="form-control"
                                id="useremail"
                                value={passwordConfirm}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-3 text-end">
                            <button className="btn btn-primary w-sm waves-effect waves-light"
                                    type="submit"> {loading?(<ButtonSpinner />): 'Update password'}
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

export default withRouter(ChooseNewPasswordFormComponent);