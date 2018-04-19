import React, {Component} from "react";

import ItemDetailsHeader from "../../components/general/itemDetailsHeader/ItemDetailsHeader";
import {connect} from "react-redux";
import {addIssueToNewProject, deleteIssueAction, updateIssue} from "../../actions/issue";
import {DELETE_ISSUE} from "../../constants/actionTypes";
import IssueToProjectDropdown from "../../components/issues/IssueToProjectDropdown";
import DescriptionTextArea from "../../components/issues/DescriptionTextArea";

class IssueDetails extends Component {

    state = {
        subTasksIsOpen: false
    };

    handleAddToNewProject = (projectId) => {
        let {
            issue,
            token,
        } = this.props;
        this.props.addIssueToNewProject(issue, projectId, token);
    };

    handleUpdateProject = (projectId) => {
        let {issue} = this.props;
        this.props.updateIssue({
            ...issue,
            projectId
        });
    };

    handleUpdateDescription = (description) => {
        let {issue} = this.props;
        this.props.updateIssue({...issue, description});
    };

    onSelectMenuItem = (eventKey) => {

        let {
            issue,
            deleteIssue
        } = this.props;

        switch (eventKey) {
            case DELETE_ISSUE:
                deleteIssue(issue.id)
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
                                                               issue={issue}
                                                               onAddToNewProject={this.handleAddToNewProject}
                                                               onSelectProject={this.handleUpdateProject}/>
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
        projects: state.projects.list,
        token: state.profile.token
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateIssue: (issue) => dispatch(updateIssue(issue)),
        addIssueToNewProject: (issue, projectId, token) => dispatch(addIssueToNewProject(issue, projectId, token)),
        deleteIssue: (id) => dispatch(deleteIssueAction(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueDetails);