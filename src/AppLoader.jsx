import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { checkUserSession } from "./redux/user/user.actions";

import { selectCurrentUserFetchingStatus } from "./redux/user/user.selectors";
import SpinnerComponent from "./components/spinners/page-spinner-component/spinner.component";
import App from "./App";


const AppLoader = ({ checkUserSession, isCurrentUserFetching }) => {

    useEffect(async () => {
        await checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            {
                isCurrentUserFetching?<SpinnerComponent />:<App />
            }
        </div>
    );


}

const mapStateToProps = createStructuredSelector({
    isCurrentUserFetching: selectCurrentUserFetchingStatus
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppLoader);
