import React, {Component} from "react";
import {Col, Table} from "react-bootstrap";

import ProjectsView from "../../../components/projects/ProjectsView";
import ProjectsFilters from "../../../components/projects/ProjectsFilters";
import tableStyle from "../css/tableView.css";
import style from "../css/style.css";
import {byId, issuesInProject, issuesWithExecutor, issuesWithStatus} from "../../../helpers/dateFilter";
import {issueStatuses} from "../../../constants/Constants";
import {connect} from "react-redux";

const DATE_FORMAT = "MMM DD, YYYY";

class TableView extends Component {

    processIssue(issue, result, issueCount, users) {
        result.push(
            <tr key={result.length}>
                <td>{issueCount}</td>
                <td>
                    <span>&#8870;</span>
                    <span>{issue.name}</span>
                </td>
                <td>{issue.startDate ? moment(issue.startDate).format(DATE_FORMAT) : ""}</td>
                <td>{issue.endDate ? moment(issue.endDate).format(DATE_FORMAT) : ""}</td>
                <td>{issue.startDate && issue.endDate ? `${issue.endDate.diff(issue.startDate, "day") + 1} д.` : ""}</td>
                <td>{issueStatuses[issue.status].text}</td>
                <td>
                    {issue.executors.map(id => byId(users, id))
                        .map(user => `${user.name} ${user.surname}`)
                        .join(", ")}
                </td>
            </tr>
        );
        let subtaskCount = 1;
        for (let subtask of issue.subtasks) {
            result.push(
                <tr key={result.length}>
                    <td>{`${issueCount}.${subtaskCount++}`}</td>
                    <td>
                        {subtask.name}
                    </td>
                    <td/>
                    <td/>
                    <td/>
                    <td>{subtask.done ? "Выполнена" : "Активна"}</td>
                    <td>
                        {subtask.userId ? `${byId(users, subtask.userId).name} ${byId(users, subtask.userId).surname}` : ""}
                    </td>
                </tr>
            );
        }
    }

    generateRows() {
        let {
            projects,
            issues,
            users,
            showIssuesWithoutProject,
            statusFilter,
            executorFilter,
        } = this.props;

        if (statusFilter) {
            issues = issuesWithStatus(issues, statusFilter);
        }
        if (executorFilter) {
            issues = issuesWithExecutor(issues, executorFilter);
        }

        let result = [];
        let issueCount = 1;
        for (let project of projects) {
            result.push(
                <tr key={result.length} className={tableStyle["project-row"]}>
                    <td/>
                    <td>{project.name}</td>
                    <td>{project.startDate ? moment(project.startDate).format(DATE_FORMAT) : ""}</td>
                    <td>{project.endDate ? moment(project.endDate).format(DATE_FORMAT) : ""}</td>
                    <td> {project.startDate && project.endDate ? `${project.endDate.diff(project.startDate, "day") + 1} д.` : ""}</td>
                    <td/>
                    <td/>
                </tr>
            );
            const projectIssues = issuesInProject(issues, project.id);
            for (let issue of projectIssues) {
                this.processIssue(issue, result, issueCount++, users);
            }
        }
        const withoutProject = issuesInProject(issues, undefined);
        if (showIssuesWithoutProject && withoutProject.length > 0) {
            result.push(
                <tr key={result.length} className={tableStyle["project-row"]}>
                    <td/>
                    <td>Без проектные</td>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                </tr>
            );
            for (let issue of withoutProject) {
                this.processIssue(issue, result, issueCount, users);
            }
        }
        return result;
    }

    render() {

        let {
            basePath,
            selectedKey,
            headerText,
            statusFilter
        } = this.props;

        return (
            <Col sm={10} className={`${style.mainContainer} ${style.fullHeight}`}>
                <Col sm={12} className={` ${style.projectsContainer} ${style.fullHeight}`}>
                    <div className={` ${style.background} ${style.fullHeight}`}>
                        <div className={style.mainHeader}>
                            {headerText ? headerText : "Проекты"}
                        </div>
                        <ProjectsView elementStyle={tableStyle["view-switch"]}
                                      basePath={basePath}
                                      selectedMenuItem={selectedKey}/>
                        <ProjectsFilters selectedStatusFilter={statusFilter}
                                         textBeforeFilter={"ПОКАЗАТЬ"}/>
                        <Table responsive className={tableStyle["table-view"]}>
                            <thead>
                            <tr>
                                <th/>
                                <th>
                                    Заголовок <span className="caret fa-rotate-180"/>
                                </th>
                                <th>Начало</th>
                                <th>Срок выполнения</th>
                                <th>Длительность</th>
                                <th>Статус</th>
                                <th>Исполнители</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.generateRows()}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Col>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        statusFilter: state.filters.issueStatusFilterProjectView,
    }
};

export default connect(mapStateToProps)(TableView);