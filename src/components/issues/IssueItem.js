import React, {Component} from "react";
import {Badge, Button, Col, Collapse, Image, Panel} from "react-bootstrap"
import {Link} from "react-router-dom";

import style from "./css/style.css"

class IssueItem extends Component {

    state = {
        expanded: false,
        collapsible: false
    };

    render() {
        let {
            issue
        } = this.props;

        return (
            <div className={style.header}>
                <Image  className={` rounded-0`} alt="avatar"
                       responsive/>
                <Image className={`rounded-0`} alt="avatar"
                       responsive/>
            </div>
        )
    }

}

export default IssueItem;