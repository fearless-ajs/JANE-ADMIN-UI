import Helper, {endPoint} from "./Api";
import axios from "axios";
import Api from "./Api";

class Auth extends Api{

    authenticateUser = async (email, password) => {
        return await axios.post(`${this.endPoint()}/auth/sign-in`, {
            email,
            password
        },{ withCredentials: true });
    }

    verifyResetPasswordEmail = async (email) => {
        return await axios.post(`${this.endPoint()}/auth/reset-password`,{
            email
        },{ withCredentials: true });
    }

    chooseNewPassword = async (resetToken, password, passwordConfirm) => {
        return await axios.patch(`${this.endPoint()}/auth/reset-password/${resetToken}`,{
            password,
            passwordConfirm
        },{ withCredentials: true });
    }


    verifyAccount = async token => {
        return await axios.get(`${this.endPoint()}/auth/verify-user/v-token/${token}`,{ withCredentials: true });
    }

    registerUser = async (name, email, phone, password, confirmPassword) => {
        return await axios.post(`${this.endPoint()}/users/sign-up`, {
            name,
            email,
            phone,
            password,
            passwordConfirm: confirmPassword
        },{ withCredentials: true });
    }

    updateUser = async (formData) => {
        return await axios.patch(`${this.endPoint()}/users/update-me`, formData,{ withCredentials: true });
    }


    updateSettings = async (...data) => {
        return await axios.post(`${this.endPoint()}/system`, { data
        },{ withCredentials: true })
            .then(response => {
                return response
            })
            .catch(error => {
                // console.log(error.response.data)
                return error
            });
    }

    isUserLoggedIn = async () => {
        return await axios.post(`${this.endPoint()}/auth/is-logged-in`, {
        },{ withCredentials: true });
    }

    logout = async () => {
       await axios.post(`${this.endPoint()}/auth/sign-out`, {},{ withCredentials: true });
    }
}

export default new Auth;