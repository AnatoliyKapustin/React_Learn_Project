import * as actionTypes from '../constants/actionTypes';

const projects = (state = {list: []}, action) => {
    switch (action.type) {
        case actionTypes.ADD_PROJECT:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.project,
                ]
            };
        case actionTypes.DELETE_PROJECT:
            return {
                ...state,
                list: state.list.filter(project => project.id !== action.id),
            };
        case actionTypes.GET_ALL_PROJECTS:
            return {
                ...state,
                list: [
                    ...state.list
                ]
            };
        default:
            return state;
    }
};

export default projects;