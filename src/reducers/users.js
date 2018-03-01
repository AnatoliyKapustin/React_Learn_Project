import * as actionTypes from '../constants/actionTypes';

const users = (state = {list: []}, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_USERS:
            return {
                list: [
                    ...state.list,
                    action.users
                ]
            };
        default:
            return state;
    }
};

export default users;