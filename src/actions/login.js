import * as actionTypes from '../constants/actionTypes';
import {apiLogin} from '../api/api'

const loginAction = () => {
    return {
        type: actionTypes.LOGIN
    }
};

const successLogin = (token) => {
    return {
        type: actionTypes.SUCCESS_LOGIN,
        token
    }
};

const loginFail = (login, password) => {
    return {
        type: actionTypes.UNSUCCESSFUL_LOGIN,
        login,
        password
    }
};

const logOut = () => {
    localStorage.setItem("token", undefined);
    return{
        type: actionTypes.LOGOUT
    }
};

export function loginUser(login, password) {
    return dispatch => {
        dispatch(loginAction());
        new Promise((resolve, reject) => {
            let token = apiLogin(login, password);
            if (token) {
                localStorage.setItem("token", token);
                resolve(token)
            }
            else {
                reject()
            }
        }).then((token) => dispatch(successLogin(token)))
            .catch(error => dispatch(loginFail(login, password)))
    };
}