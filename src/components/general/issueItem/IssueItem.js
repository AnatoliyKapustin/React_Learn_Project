import React, {Component} from "react";
import {Image} from "react-bootstrap"
import undefinedAvatar from "../../../../public/images/defaultAvatar.png"

import style from "../../issues/css/style.css"
import {connect} from "react-redux";
import IssueDoubleImage from "../../issues/DoubleImageIssueItem";
import {byUuid} from "../../../helpers/dateFilter";
import {Link} from "react-router-dom";

class IssueItem extends Component {

    state = {
        expanded: false,
        collapsible: false
    };

    static defaultProps = {
        projectView: false
    };

    render() {
        let {
            issue,
            users,
            key,
            to,
            selected,
            projectView,
        } = this.props;

        let executorAvatar = undefinedAvatar;

        if (issue.executors.length > 0) {
            executorAvatar = byUuid(users, issue.executors[0]).avatar;
        }

        return (
            <Link to={to}>
                <div className={`${style.header1} ${style.fullWidth}`}>
                    {projectView ?
                        <Image src={issue.author.avatar}
                               className={`${style.issueDoubleImageBottom} rounded-0`}
                               alt="avatar"
                               responsive/>
                        : <IssueDoubleImage authorAvatar={issue.author.avatar} executorAvatar={executorAvatar}/>
                    }
                    <span className={style.issueTitle}>
                    {issue.name}
                </span>
                </div>
            </Link>
        )
    }

}

function mapStateToProps(state) {
    return {
        user: state.profile.user
    }
}

export default connect(mapStateToProps)(IssueItem);