import React, {Component} from "react";
import {Badge, Button, Col, Collapse, Image, Panel} from "react-bootstrap"
import {Link} from "react-router-dom";

import style from "./css/style.css"

class IssueItem extends Component {

    render() {
        let {
            user
        } = this.props;

        return (
            <div className={style.header}>
                <Image src={user.avatar} className={`${style.navAvatar} rounded-0`} alt="avatar"
                       responsive/>
                <Image src={user.avatar} className={`${style.navAvatar} rounded-0`} alt="avatar"
                       responsive/>
            </div>
        )
    }

}

export default IssueItem;