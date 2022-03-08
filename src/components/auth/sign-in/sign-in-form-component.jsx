import React, {useState} from "react";
import {signInStart} from "../../../redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import {
    selectCurrentUserLoadingStatus,
    selectCurrentUserLoginError,
} from "../../../redux/user/user.selectors";
import {connect} from "react-redux";
import ButtonSpinner from "../../spinners/button-spinner.component";
const SignInFormComponent = ({ signInStart, isLoading }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    });
    const { email, password } = userCredentials;


    const handleSubmit = async (event) => {
        event.preventDefault();
        signInStart(email, password);
    }


    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
    };
    return  (
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label className="form-label" htmlFor="username">Username</label>
                <input
                    type="email"
                    className="form-control"
                    id="username"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                    placeholder="Enter username"
                />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="userpassword">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="userpassword"
                    value={password}
                    name="password"
                    onChange={handleChange}
                    required
                    placeholder="Enter password" />
            </div>

            <div className="form-check">
                <input type="checkbox" className="form-check-input"
                       id="auth-remember-check" />
                <label className="form-check-label" htmlFor="auth-remember-check">Remember
                    me</label>
            </div>

            <div className="mt-3 text-end">
                <button className="btn btn-primary w-sm waves-effect waves-light"
                        type="submit">  {isLoading?(<ButtonSpinner />): 'Log In'}
                </button>
            </div>
        </form>
    );
}

//For setting values on the state with redux
const mapDispatchToProps = dispatch => ({
    signInStart: (email, password) => dispatch(signInStart({ email, password })),
});

const mapStateToProps = createStructuredSelector({
    loginError: selectCurrentUserLoginError,
    isLoading: selectCurrentUserLoadingStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInFormComponent);