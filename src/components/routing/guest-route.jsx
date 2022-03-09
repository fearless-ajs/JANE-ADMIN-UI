import React from "react";
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import {selectLastAttemptedRoute} from "../../redux/routing/routing.selectors";

const GuestRoute = ({ currentUser, component: Component, lastAttemptedRoute, history, ...rest }) => {

    return (
        <Route
            {...rest}
            render = {props => {
                if (!currentUser){
                    return <Component { ...props } />;
                }else {
                    return <Redirect to={lastAttemptedRoute} />;
                }
            }}
        />
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    lastAttemptedRoute: selectLastAttemptedRoute
});
export default withRouter(connect(mapStateToProps)(GuestRoute));