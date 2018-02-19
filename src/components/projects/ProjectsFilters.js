import React, {Component} from "react";
import DropdownInput from "../general/dropdownInput/IssuesDropdownFilter";
import {issueStatuses} from "../../constants/Constants"

class ProjectFilters extends Component {

    render() {

        let {
            textBeforeFilter
        } = this.props;

        return (
            <DropdownInput id={"projects-filter"} textBeforeFilter={textBeforeFilter} items={issueStatuses}/>
        )
    }

}

export default ProjectFilters;