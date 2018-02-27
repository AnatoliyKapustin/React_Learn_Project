import React, {Component} from "react";

import style from "../issues/css/style.css"

class IssueDoubleImage extends Component {

    render() {

        let {
            authorAvatar,
            executorAvatar
        } = this.props;

        this.return(<div>
                <Image src={authorAvatar} className={`${style.issueDoubleImageBottom} rounded-0`} alt="avatar"
                       responsive/>
                <Image src={executorAvatar} className={`${style.issueDoubleImageTop} rounded-0`} alt="avatar"
                       responsive/>
            </div>
        )
    };
}

export default IssueDoubleImage;