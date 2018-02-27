import * as actionTypes from '../constants/actionTypes';
import {getUsers as getUsersViaApi} from '../api/api'

export function getUserByToken(token) {
    return getUsersViaApi().filter(user => user.uuid === token)[0];
}

const getUserAction = (user) => {
    return {
        type: actionTypes.GET_USER,
        user
    }
};

const getAllUsersAction = () => {
    return {
        type: actionTypes.GET_ALL_USERS,
        users: getUsersViaApi()
    }
};

export function getUser(token) {
    return dispatch => {
        new Promise((resolve, reject) => {
            let user = getUserByToken(token);
            if (user) {
                resolve(user)
            }
            else {
                reject()
            }
        }).then((user) => dispatch(getUserAction(user)))
            .catch(() => dispatch({
                type: actionTypes.LOGOUT,
            }))
    };
}

export function getAllUsers() {
    return dispatch => dispatch(getAllUsersAction());
}