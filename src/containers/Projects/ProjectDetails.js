import React, {Component} from "react";

import style from "./css/projectDetails.css";
import ItemDetailsHeader from "../../components/general/itemDetailsHeader/ItemDetailsHeader";
import {connect} from "react-redux";
import {deleteProjectAction} from "../../actions/project";
import {DELETE_PROJECT} from "../../constants/actionTypes";

class ProjectDetails extends Component {

    onSelectMenuItem = (eventKey) => {
        let {
            project,
            dispatch
        } = this.props;
        switch (eventKey) {
            case DELETE_PROJECT:
                dispatch(deleteProjectAction(project.id))
        }
    };

    render() {

        let {
            name
        } = this.props.project;

        let menuItems = [
            {
                text: "Удалить проект",
                actionType: DELETE_PROJECT,
            }
        ];

        return (
            <div>
                <ItemDetailsHeader headerText={name}
                                   componentStyles={style}
                                   options={menuItems}
                                   onSelect={this.onSelectMenuItem}/>
            </div>
        )
    }

}

export default connect()(ProjectDetails);