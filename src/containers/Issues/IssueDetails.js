import React, {Component} from "react";

import ItemDetailsHeader from "../../components/general/itemDetailsHeader/ItemDetailsHeader";
import {connect} from "react-redux";
import {deleteProjectAction} from "../../actions/project";
import {DELETE_ISSUE} from "../../constants/actionTypes";

class IssueDetails extends Component {

    onSelectMenuItem = (eventKey) => {
        let {
            project,
            dispatch
        } = this.props;
        switch (eventKey) {
            case DELETE_ISSUE:
                dispatch(deleteProjectAction(project.id))
        }
    };

    render() {

        let {
            name
        } = this.props.issue;

        let menuItems = [
            {
                text: "Удалить задачу",
                eventKey: DELETE_ISSUE,
            }
        ];

        return (
            <div>
                <ItemDetailsHeader headerText={name}
                                   options={menuItems}
                                   onSelect={this.onSelectMenuItem}/>
            </div>
        )
    }

}

export default connect()(IssueDetails);