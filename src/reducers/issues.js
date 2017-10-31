import * as actionTypes from '../constants/actionTypes';

const issues = (state = {list: []}, action) => {
    switch (action.type) {
        case actionTypes.ADD_ISSUE:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        ...action.issue,
                    }
                ]
            };
        default:
            return state;
    }
};

export default issues;