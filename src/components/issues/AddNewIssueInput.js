import React, {Component} from "react";
import {Col, Form, FormControl, FormGroup, Image, Panel} from "react-bootstrap"

import style from "./css/style.css"

class AddNewIssueInput extends Component {

    focus() {
        this.issueInput.focus();
    }

    handleAddNewIssue = () => {
    }

    render() {
        let {
            onSubmit
        } = this.props

        return (
            <Form inline onSubmit={onSubmit}>
                <FormGroup>
                    <Image alt="avatar"/>
                    <FormControl type="text"
                                 className={`${style.fullWidthInput}`}
                                 inputRef={(input) => {
                                     this.issueInput = input
                                 }}
                    />
                </FormGroup>
            </Form>
        )
    }

}

export default AddNewIssueInput;