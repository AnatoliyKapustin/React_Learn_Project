import React, {Component} from "react";
import DropdownInput from "../general/dropdownInput/IssuesDropdownFilter";
import {issueStatuses} from "../../constants/Constants"

class ProjectFilters extends Component {

    render() {
        return (
            <DropdownInput id={"projects-filter"} items={issueStatuses}/>
        )
    }

}

export default ProjectFilters;