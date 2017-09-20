import * as actionTypes from '../constants/actionTypes';

const profile = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {};
        case  actionTypes.LOGOUT:
            return {};
        case actionTypes.SUCCESS_LOGIN:
            return {
                token: action.token,
            };
        case  actionTypes.UNSUCCESSFUL_LOGIN:
            return {
                login: action.login,
                password: action.password,
                failMessage: true,
            };
        case  actionTypes.GET_USER:
            return {
                user: action.user,
                token: state.token
            };
        default:
            return state;
    }
};

export default profile;