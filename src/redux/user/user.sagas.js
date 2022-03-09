import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionTypes } from "./user.types";
import history from "../../history";
import Notify from "../../utils/Notify";

import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    userSessionFailure
} from "./user.actions";
import Auth from "../../models/Auth";

// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import TrustServiceProvider from "../../components/providers/TrustServiceProvider";


/** ------------------------------------------------------------------- **/
// Asynchronous logic/ other controllers
// Payload automatically comes in as an object
/** ------------------------------------------------------------------- **/
export function* isUserAuthenticated() {
    try {
        // Check User Authentication status
        const userAuth =  yield Auth.isUserLoggedIn();
        if (!TrustServiceProvider.hasRole(userAuth.data, 'administrator')
            && !TrustServiceProvider.hasRole(userAuth.data, 'super-administrator')){
            Notify.warn('Access denied!')
            yield put(signInFailure(`You are not authorized to access this resource`,))
        }else {
            yield put(signInSuccess(userAuth.data));
            Notify.success("Session restored")
        }
    }catch (error) {
        yield put(userSessionFailure(error.response));
    }
}

export function* signIn({payload: { email, password }}) {
    try{
        const userAuth = yield Auth.authenticateUser(email, password);
        if (!TrustServiceProvider.hasRole(userAuth.data, 'administrator')
            && !TrustServiceProvider.hasRole(userAuth.data, 'super-administrator')){
            Notify.warn('Access denied!')
            // Set loading to false
            yield put(signInFailure(`You are not authorized to access this resource`,))
        }else {
            yield put(signInSuccess(userAuth.data));
            yield Notify.success("Logged in successfully");
            history.push('/')
        }
    }catch(error) {
        Notify.error('Invalid username or password')
        yield put(signInFailure(error.response))
    }
}

export function* signOut() {
   try{
       yield Auth.logout();
       yield put(signOutSuccess());
       yield Notify.success("Logged out successfully");
       history.push('/sign-in');
   }catch (error) {
       yield put(signOutFailure(error.response))
       yield Notify.error("Logout error");
   }
}

/** ------------------------------------------------------------------- **/
// LISTENERS
/** ------------------------------------------------------------------- **/
export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START, signIn)
}

export function* onSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onSignInStart),
        call(onSignOut)
    ])
}