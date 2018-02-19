import * as actionTypes from '../constants/actionTypes';

const profile = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                pending: action.payload.pending,
                logged: action.payload.logged
            };
        case actionTypes.LOGOUT:
            return {};
        case actionTypes.SUCCESS_LOGIN:
            let token = action.payload.token;
            let pending = action.payload.pending;
            let logged = action.payload.logged;
            return {
                ...state,
                pending,
                logged,
                token
            };
        case actionTypes.UNSUCCESSFUL_LOGIN:
            let login = action.login;
            let password = action.password;
            return {
                ...state,
                login,
                password,
                failMessage: true,
            };
        case actionTypes.GET_USER:
            let user = action.user;
            return {
                ...state,
                user
            };
        default:
            return state;
    }
};

export default profile;