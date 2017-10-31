import React, {Component} from "react";
import {Col, Glyphicon, Panel} from "react-bootstrap"

import style from "./css/style.css"
import AddNewIssueInput from "./AddNewIssueInput";

class AddNewIssue extends Component {

    state = {
        showInput: false,
    }

    handleAddNewIssue = () => {
        this.setState({
            showInput: true
        });
    };

    render() {
        return (
            <div className={style.addNewIssueContainer}>
                {
                    this.state.showInput ? <AddNewIssueInput/> :
                        <div className={style.addNewIssueCursor} onClick={this.handleAddNewIssue}>
                            <Glyphicon glyph="glyphicon glyphicon-plus"/>
                            <span className={style.addNewIssueText}>Новая задача</span>
                        </div>
                }
            </div>
        )
    }

}

export default AddNewIssue;