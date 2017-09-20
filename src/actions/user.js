import * as actionTypes from '../constants/actionTypes';
import {getUsers} from '../api/api'

export function getUserByToken(token) {
    return getUsers().filter(user => user.uuid === token)[0];
}

const getUserAction = (user) => {
    return {
        type: actionTypes.GET_USER,
        user
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
            .catch((error) => dispatch({
                type: actionTypes.LOGOUT,
            }))
    };
}