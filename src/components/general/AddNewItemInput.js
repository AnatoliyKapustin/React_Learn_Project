import React, {Component} from "react";
import {Col, Form, FormControl, FormGroup, Image} from "react-bootstrap"

import style from "./css/style.css"
import {connect} from "react-redux";

class AddNewItemInput extends Component {

    focus() {
        this.issueInput.focus();
    }

    render() {
        let {
            avatar,
            onSubmit
        } = this.props;

        return (
            <Form onSubmit={onSubmit} horizontal className={style.fullWidth}>
                <FormGroup className={style.container}>
                    <div className={style.avatarContainer}>
                        <Image alt="avatar" src={avatar} className={`${style.avatar} rounded-0`} responsive/>
                    </div>
                    <Col sm={11} className={style.inputContainer}>
                        <FormControl type="text"
                                     inputRef={(input) => {
                                         this.issueInput = input
                                     }}
                        />
                    </Col>
                </FormGroup>
            </Form>
        )
    }

}

function mapStateToProps(state) {
    return {
        avatar: state.profile.user.avatar
    }
}

export default connect(mapStateToProps)(AddNewItemInput);