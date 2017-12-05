import * as actionTypes from '../constants/actionTypes';

const projects = (state = {list: [], projects: []}, action) => {
    switch (action.type) {
        case actionTypes.ADD_PROJECT:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.project,
                ]
            };
        case actionTypes.GET_PROJECTS:
            let projects = action.projects;
            return {
                ...state,
                projects
            };
        default:
            return state;
    }
};

export default projects;