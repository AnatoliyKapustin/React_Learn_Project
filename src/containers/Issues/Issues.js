import React, {Component} from "react";
import {Col} from "react-bootstrap"

import style from "./css/issues.css"
import IssueItemPanel from "../../components/issues/IssueItemPanel";
import moment from "moment";
import {connect} from "react-redux";

class Issues extends Component {

    todayIssues = (issues) => {
        let now = moment().startOf("day").locale('ru');
        let filteredIssues = {};
        return <IssueItemPanel header={"НА СЕГОДНЯ"}
                               startDate={now.format("MMM DD")}
                               filteredIssues
                               showAddIssue
                               expanded/>
    };

    thisWeek = (issues) => {
        let {
            users,
        } = this.props;
        let now = moment().startOf("day").locale('ru');
        let weekEnd = moment().startOf("week").add(7, "day").locale('ru');
        // let issueThisWeek = forThisWeek(issues).map(issue => Issues.toIssueItem(issue, selectedId, users));
        return (
            <div>
                <IssueItemPanel header={"НА ЭТУ НЕДЕЛЮ"}
                                startDate={now.format("MMM DD")}
                                endDate={weekEnd.format("MMM DD")}
                    // issues={issueThisWeek}
                                collapsible/>
            </div>
        );
    };

    nextWeek = (issues) => {
        let {
            users,
        } = this.props;
        let nextWeekStart = moment().startOf("week").add(8, "day").locale('ru');
        let nextWeekEnd = moment().startOf("week").add(14, "day").locale('ru');
        // let issueNextWeek = forNextWeek(issues).map(issue => Issues.toIssueItem(issue, selectedId, users));
        return <div>
            <IssueItemPanel header="НА ЭТОЙ НЕДЕЛЕ"
                            startDate={nextWeekStart.format("MMM DD")}
                            endDate={nextWeekEnd.format("MMM DD")}
                            collapsible/>
            {/*{issueNextWeek}*/}
        </div>;
    };

    later = (issues) => {
        let {
            users,
        } = this.props;
        let nextWeekEnd = moment().startOf("week").add(14, "day").locale('ru');
        // let issueLater = forLater(issues).map(issue => Issues.toIssueItem(issue, selectedId, users));
        return <div>
            <IssueItemPanel header="ПОЗЖЕ"
                            startDate={nextWeekEnd.format("MMM DD")}
                // issueCount={issueLater.length}
                            collapsible/>
            {/*{issueLater}*/}
        </div>
    };

    render() {
        let {
            issues,
            fullContent
        } = this.props;

        return (
            <Col sm={10} className={`${style.IssuesContainer} ${style.fullHeight}`}>
                <Col sm={issues.length === 0 ? 8 : 5}
                     className={`${style.issuesTasksContainer} ${style.fullHeight}`}>
                    <div className={`${style.issues} ${style.fullHeight}`}>
                        {this.todayIssues(issues)}
                    </div>
                </Col>
                <Col sm={fullContent ? 4 : 5} className={`${style.issuesSubtasksContainer} ${style.fullHeight}`}>
                    <div className={`${style.issuesSubtasks} ${style.fullHeight}`}>
                        {this.thisWeek(issues)}
                        {this.nextWeek(issues)}
                        {this.later(issues)}
                    </div>
                </Col>
            </Col>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        issue: state.issues.list
    }
};

export default connect(mapStateToProps)(Issues);