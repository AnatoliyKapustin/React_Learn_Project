import {FILTER_ISSUES_BY_NAME} from "../constants/actionTypes";

const filters = (state = {issueName: ""}, action) => {
    switch (action.type) {
        case FILTER_ISSUES_BY_NAME:
            return {
                ...state,
                issueName: action.name
            };
        default:
            return state;
    }
};

export default filters;