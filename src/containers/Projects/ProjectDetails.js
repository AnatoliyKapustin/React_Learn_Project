import React, {Component} from "react";

import style from "./css/projectDetails.css";
import ItemDetailsHeader from "../../components/general/itemDetailsHeader/ItemDetailsHeader";
import {connect} from "react-redux";
import {deleteProject, updateProject} from "../../actions/project";
import {DELETE_PROJECT} from "../../constants/actionTypes";
import {addIssueToNewProject, deleteIssueAction, updateIssue} from "../../actions/issue";
import DescriptionTextArea from "../../components/general/DescriptionTextArea";

class ProjectDetails extends Component {

    onSelectMenuItem = (eventKey) => {
        let {
            project
        } = this.props;
        switch (eventKey) {
            case DELETE_PROJECT:
                this.props.deleteProject(project.id)
        }
    };

    handleUpdateProject = (data) => {
        let {project} = this.props;
        this.props.updateProject({
            ...project,
            data
        });
    };

    handleUpdateDescription = (description) => {
        let {project} = this.props;
        this.props.updateProject({...project, description});
    };


    render() {
        let {
            project
        } = this.props;

        let menuItems = [
            {
                text: "Удалить проект",
                actionType: DELETE_PROJECT,
            }
        ];

        return (
            <div>
                <ItemDetailsHeader headerText={project.name}
                                   componentStyles={style}
                                   options={menuItems}
                                   onSelect={this.onSelectMenuItem}/>
                <DescriptionTextArea description={project.description}
                                     onChange={this.handleUpdateDescription}/>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProject: (project) => dispatch(updateProject(project)),
        deleteProject: (id) => dispatch(deleteProject(id))
    }
};

export default connect(null, mapDispatchToProps)(ProjectDetails);