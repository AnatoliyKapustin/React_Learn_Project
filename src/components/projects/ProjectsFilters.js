import React, {Component} from "react";
import DropdownInput from "../general/dropdownInput/IssuesDropdownFilter";
import {issueStatuses} from "../../constants/Constants"
import {filterIssuesByStatus} from "../../actions/filters";
import {connect} from "react-redux";

class ProjectFilters extends Component {

    handleStatusFilterChange = (status) => {
        this.props.dispatch(filterIssuesByStatus(status))
    };

    render() {

        let {
            selectedStatusFilter,
            textBeforeFilter
        } = this.props;

        return (
            <DropdownInput id={"projects-filter"}
                           onSelect={this.handleStatusFilterChange}
                           statusFilter={selectedStatusFilter}
                           textBeforeFilter={textBeforeFilter}
                           items={issueStatuses}/>
        )
    }

}

function mapStateToProps(state) {
    return {
        statusFilter: state.filters.issueStatusFilterProjectView,
        // executorFilter: state.filters.issueExecutorFilterProjectView,
    };
}

export default connect(mapStateToProps)(ProjectFilters);