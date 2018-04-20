import React, {Component} from "react";
import {Badge, Image} from "react-bootstrap"

import style from "../../issues/css/style.css"
import {connect} from "react-redux";
import IssueDoubleImage from "../../issues/DoubleImageIssueItem";
import {byUuid} from "../../../helpers/dateFilter";
import {Link} from "react-router-dom";

class IssueItem extends Component {

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
            projectName
        } = this.props;

        let {
            executors,
            author,
            name,
            startDate
        } = issue;

        let executorAvatar = null;

        if (executors.length > 0) {
            executorAvatar = byUuid(users, executors[0]).avatar;
        }

        return (
            <Link to={to}>
                <div className={`${style.issueItemContainer} ${selected ? style.selectedItem : ""}`}>
                    {projectView ?
                        <Image src={author.avatar}
                               className={`${style.issueDoubleImageBottom} rounded-0`}
                               alt="avatar"
                               responsive/>
                        : <IssueDoubleImage authorAvatar={author.avatar} executorAvatar={executorAvatar}/>
                    }
                    <span className={style.issueTitle}>{name}</span>
                    {projectName ? <Badge bsClass={style.projectName}>{projectName}</Badge> : null}
                    {startDate ? <span className={style.issueStartDate}>{startDate.format("MMM DD")}</span> : null}
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