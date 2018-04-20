import React, {Component} from "react";
import style from "../css/style.css";
import {Col} from "react-bootstrap";
import AddNewItem from "../../../components/general/AddNewItem";
import {forLater, forNextWeek, forThisWeek, forTodayOrEarly, issuesWithStatus} from "../../../helpers/dateFilter";
import IssueItem from "../../../components/general/issueItem/IssueItem";
import ProjectsContainer from "../ProjectsContainer";
import ProjectsFilters from "../../../components/projects/ProjectsFilters";
import ProjectsView from "../../../components/projects/ProjectsView";
import {connect} from "react-redux";
import {createIssue, createNewIssueAndAddToProject} from "../../../actions/issue";
import IssueDetails from "../../Issues/IssueDetails";
import ProjectDetails from "../ProjectDetails";

class ListView extends Component {

    toIssueItemList(issues, filterFunction) {
        let {
            selectedIssueId,
            projects,
            basePath,
            users,
            selectedProject
        } = this.props;

        return filterFunction(issues).map(issue => {
            let projectName = selectedProject ? selectedProject.name : undefined;
            if (!projectName && issue.projectId !== undefined && projects !== undefined) {
                projectName = projects.filter(project => project.id === issue.projectId)[0].name;
            }
            return (<IssueItem issue={issue}
                               projectName={projectName}
                               key={issue.id}
                               to={`${basePath}/issues/${issue.id}`}
                               selected={selectedIssueId === issue.id.toString()}
                               users={users}
                               projectView/>);
        })
    }

    handleAddNewTask = (event, input) => {
        event.preventDefault();
        let {
            user,
            selectedProject
        } = this.props;
        if (selectedProject) {
            this.props.createNewIssueAndAddToProject(selectedProject, input.value, user.uuid);
        } else {
            this.props.createIssue(input.value, user.uuid);
        }
        input.value = "";
    };

    render() {
        let {
            basePath,
            selectedKey,
            headerText,
            issues,
            statusFilter,
            selectedIssue,
            selectedProject
        } = this.props;

        if (statusFilter) {
            issues = issuesWithStatus(issues, statusFilter);
        }
        // if(executorFilter) {
        //     issues = issuesWithExecutor(issues, executorFilter);
        // }

        let today = null;
        let thisWeek = null;
        let nextWeek = null;
        let later = null;

        if (forTodayOrEarly(issues).length > 0) {
            today = <ProjectsContainer header="Сегодня или раньше"
                                       items={this.toIssueItemList(issues, forTodayOrEarly)}
                                       open/>
        }

        if (forThisWeek(issues).length > 0) {
            thisWeek = <ProjectsContainer header="Эта неделя"
                                          items={this.toIssueItemList(issues, forThisWeek)}
                                          open/>
        }

        if (forNextWeek(issues).length > 0) {
            nextWeek = <ProjectsContainer header="Следующая неделя"
                                          items={this.toIssueItemList(issues, forNextWeek)}
                                          open/>
        }

        if (forLater(issues).length > 0) {
            later = <ProjectsContainer header="Позже"
                                       items={this.toIssueItemList(issues, forLater)}
                                       open/>
        }
        return (
            <Col sm={10} className={`${style.mainContainer} ${style.fullHeight}`}>
                <Col sm={selectedIssue || selectedProject ? 7 : 12}
                     className={` ${style.background} ${style.projectsContainer} ${style.fullHeight}`}>
                    <div className={style.mainHeader}>
                        {headerText ? headerText : "Проекты"}
                    </div>
                    <ProjectsView basePath={basePath}
                                  selectedMenuItem={selectedKey}/>
                    <ProjectsFilters selectedStatusFilter={statusFilter}/>
                    <AddNewItem onSubmit={this.handleAddNewTask}/>
                    {today}
                    {thisWeek}
                    {nextWeek}
                    {later}
                </Col>
                {selectedIssue || selectedProject ?
                    <Col sm={5}
                         className={`${style.issueDetailsContainer} ${style.projectsContainer} ${style.fullHeight}`}>
                        <div className={`${style.background} ${style.fullHeight}`}>
                            {
                                selectedIssue
                                    ? <IssueDetails issue={selectedIssue}/>
                                    : selectedProject
                                    ? <ProjectDetails project={selectedProject}/>
                                    : null
                            }
                        </div>
                    </Col>
                    : null
                }
            </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        statusFilter: state.filters.issueStatusFilterProjectView,
        user: state.profile.user,
        users: state.users.list,
        projects: state.projects.list,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createIssue: (name, uuid) => dispatch(createIssue(name, uuid)),
        createNewIssueAndAddToProject: (project, name, uuid) => dispatch(createNewIssueAndAddToProject(project, name, uuid)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);