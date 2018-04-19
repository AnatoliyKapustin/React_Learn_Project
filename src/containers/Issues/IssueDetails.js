import React, {Component} from "react";

import ItemDetailsHeader from "../../components/general/itemDetailsHeader/ItemDetailsHeader";
import {connect} from "react-redux";
import {deleteIssueAction, updateIssue} from "../../actions/issue";
import {DELETE_ISSUE} from "../../constants/actionTypes";
import IssueToProjectDropdown from "../../components/issues/IssueToProjectDropdown";
import DescriptionTextArea from "../../components/issues/DescriptionTextArea";

class IssueDetails extends Component {

    state = {
        subTasksIsOpen: false
    };

    handleUpdateDescription = (description) => {
        let {issue} = this.props;
        this.props.updateDescription({...issue, description});
    };

    onSelectMenuItem = (eventKey) => {

        let {
            issue,
            dispatch
        } = this.props;

        switch (eventKey) {
            case DELETE_ISSUE:
                dispatch(deleteIssueAction(issue.id))
        }
    };

    render() {

        let {
            subTasksIsOpen
        } = this.state;

        let {
            projects,
            issue,
        } = this.props;

        let menuItems = [
            {
                text: "Удалить задачу",
                actionType: DELETE_ISSUE,
            }
        ];

        return (
            <div>
                <ItemDetailsHeader headerText={issue.name}
                                   options={menuItems}
                                   onSelect={this.onSelectMenuItem}
                                   bottomComponent={() =>
                                       <IssueToProjectDropdown projects={projects}
                                                               issue={issue}/>
                                   }/>
                {
                    subTasksIsOpen ?
                        <div>
                        </div>
                        :
                        <DescriptionTextArea description={issue.description}
                                             onChange={this.handleUpdateDescription}/>

                }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateDescription: (description) => dispatch(updateIssue(description)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueDetails);