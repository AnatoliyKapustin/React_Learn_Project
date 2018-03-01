import React, {Component} from "react";
import {Col, Glyphicon} from "react-bootstrap"

import style from "./css/issues.css"
import IssueItemPanel from "../../components/issues/IssueItemPanel";
import moment from "moment";
import {connect} from "react-redux";
import {forLater, forNextWeek, forThisWeek, forTodayOrEarly} from "../../helpers/dateFilter";
import IssueDateHeader from "../../components/general/issueDateHeader/IssueDateHeader";
import {issueStatuses} from "../../constants/Constants";
import IssueDetails from "./IssueDetails";

class Issues extends Component {

    doneIssuesCount = (issues) => {
        return issues.filter(issue => issue.status === issueStatuses.DONE.key).length
    };

    todayIssues = (issues) => {
        let now = moment().startOf("day").locale('ru');
        return <IssueItemPanel header={"НА СЕГОДНЯ"}
                               startDate={now.format("MMM DD")}
                               filteredIssues={forTodayOrEarly(issues)}
                               showAddIssue
                               expanded/>
    };

    thisWeek = (issues) => {
        let now = moment().startOf("day").locale('ru');
        let weekEnd = moment().startOf("week").add(7, "day").locale('ru');
        return <IssueItemPanel header={"НА ЭТУ НЕДЕЛЮ"}
                               startDate={now.format("MMM DD")}
                               endDate={weekEnd.format("MMM DD")}
                               filteredIssues={forThisWeek(issues)}
                               collapsible/>
    };

    nextWeek = (issues) => {
        let nextWeekStart = moment().startOf("week").add(8, "day").locale('ru');
        let nextWeekEnd = moment().startOf("week").add(14, "day").locale('ru');
        return <IssueItemPanel header="НА ЭТОЙ НЕДЕЛЕ"
                               startDate={nextWeekStart.format("MMM DD")}
                               endDate={nextWeekEnd.format("MMM DD")}
                               filteredIssues={forNextWeek(issues)}
                               collapsible/>
    };

    later = (issues) => {
        let nextWeekEnd = moment().startOf("week").add(14, "day").locale('ru');
        return <IssueItemPanel header="ПОЗЖЕ"
                               startDate={nextWeekEnd.format("MMM DD")}
                               filteredIssues={forLater(issues)}
                               collapsible/>
    };

    render() {

        let {
            issues,
            selectedIssue,
            halfView
        } = this.props;

        let issueDoneIcon = <Glyphicon className={style.issueDoneIcon} glyph="glyphicon glyphicon-ok"/>;

        return (
            <Col sm={10} className={`${style.IssuesContainer} ${style.fullHeight}`}>
                <Col sm={halfView ? 6 : 8}
                     className={`${style.issues} ${style.background} ${style.fullHeight}`}>
                    {this.todayIssues(issues)}
                    {
                        selectedIssue
                            ? <div className={`${style.dateItems} ${style.fullHeight}`}>
                                {this.thisWeek(issues)}
                                {this.nextWeek(issues)}
                                {this.later(issues)}
                            </div>
                            : null
                    }
                    <IssueDateHeader headerStyle={style.issueDoneHeader}
                                     icon={issueDoneIcon}
                                     header={"ЗАВЕРШЕНА"}
                                     count={this.doneIssuesCount(issues)}/>

                </Col>
                <Col sm={halfView ? 6 : 4} className={`${style.issueDetails} ${style.fullHeight}`}>
                    <div className={`${style.background} ${style.fullHeight}`}>
                        {
                            selectedIssue
                                ? <IssueDetails issue={selectedIssue}/>
                                : <div className={`${style.dateItems} ${style.fullHeight}`}>
                                    {this.thisWeek(issues)}
                                    {this.nextWeek(issues)}
                                    {this.later(issues)}
                                </div>
                        }
                    </div>
                </Col>
            </Col>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        issues: state.issues.list
    }
};

export default connect(mapStateToProps)(Issues);