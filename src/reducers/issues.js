import * as actionTypes from '../constants/actionTypes';

const issues = (state = {list: []}, action) => {
    switch (action.type) {
        case actionTypes.ADD_ISSUE:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.issue,
                ]
            };
        case actionTypes.DELETE_ISSUE:
            return {
                ...state,
                list: state.list.filter(issue => issue.id !== action.id),
            };
        case actionTypes.UPDATE_ISSUE:
            let updatedList = state.list.map(issue => issue.id === action.issue.id ? action.issue : issue);
            return {
                ...state,
                list: updatedList
            };
        default:
            return state;
    }
};

export default issues;