import {LOGIN, SUCCESS_LOGIN, UNSUCCESSFUL_LOGIN} from '../constants/login/login';
import {apiLogin} from '../api/api'

const loginAction = () => {
    return {
        type: LOGIN
    }
};

const successLogin = (token) => {
    return {
        type: SUCCESS_LOGIN,
        token
    }
};

const loginFail = (login, password) => {
    return {
        type: UNSUCCESSFUL_LOGIN,
        login,
        password
    }
};

export function loginUser(login, password) {
    return dispatch => {
        dispatch(loginAction());
        new Promise((resolve, reject) => {
            let uuid = apiLogin(login, password);
            if (uuid) {
                resolve(uuid)
            }
            else {
                reject()
            }
        }).then((uuid) => dispatch(successLogin(uuid)))
            .catch(error => dispatch(loginFail(login, password)))
    };
}