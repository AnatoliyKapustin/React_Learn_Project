import React, {Component} from "react";
import {Image} from "react-bootstrap"

import style from "./css/style.css"
import {connect} from "react-redux";

class IssueItem extends Component {

    state = {
        expanded: false,
        collapsible: false
    };

    render() {
        let {
            issue,
            user
        } = this.props;

        if (!user) {
            return null
        }
        return (
            <div className={`${style.header1} ${style.fullWidth}`}>
                <Image src={user.avatar} className={`${style.issueDoubleImageBottom} rounded-0`} alt="avatar"
                       responsive/>
                <Image src={user.avatar} className={`${style.issueDoubleImageTop} rounded-0`} alt="avatar"
                       responsive/>

                <span className={style.issueTitle}>
                    taefdfasd
                </span>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        user: state.profile.user
    }
}

export default connect(mapStateToProps)(IssueItem);