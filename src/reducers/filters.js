import {FILTER_ISSUES_BY_NAME, FILTER_ISSUES_BY_STATUS_PROJECT_VIEW} from "../constants/actionTypes";

const filters = (state = {issueName: ""}, action) => {
    switch (action.type) {
        case FILTER_ISSUES_BY_STATUS_PROJECT_VIEW:
            return {
                ...state,
                issueStatusFilterProjectView: action.filter,
            };
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