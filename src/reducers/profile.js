import {LOGIN, SUCCESS_LOGIN, UNSUCCESSFUL_LOGIN} from '../constants/login/login';

const login = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return {};
        case SUCCESS_LOGIN:
            return {
                token: action.token,
            };
        case  UNSUCCESSFUL_LOGIN:
            return {
                login: action.login,
                password: action.password,
                failMessage: action.failMessage,
                failMessage: true,
            };
        default:
            return state;
    }
};

export default login;