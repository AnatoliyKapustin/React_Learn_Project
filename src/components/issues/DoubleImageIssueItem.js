import React, {Component} from "react";

import undefinedAvatar from "../../../public/images/defaultAvatar.png"

import style from "../issues/css/style.css"
import {Image} from "react-bootstrap";

class IssueDoubleImage extends Component {

    render() {

        let {
            authorAvatar,
            executorAvatar
        } = this.props;

        return (
            <div className={style.doubleImagesContainer}>
                <Image src={authorAvatar} className={`${style.issueDoubleImageBottom} rounded-0`} alt="avatar"
                       responsive/>
                <Image src={executorAvatar ? executorAvatar : undefinedAvatar}
                       className={`${style.issueDoubleImageTop} ${executorAvatar ? "" : style.undefinedAvatar} rounded-0`}
                       alt="avatar"
                       responsive/>

            </div>
        )
    };
}

export default IssueDoubleImage;