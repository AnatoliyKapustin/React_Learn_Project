import React, {Component} from "react";
import style from "../css/style.css";
import {Col} from "react-bootstrap";
import AddNewItem from "../../../components/general/AddNewItem";
import {forLater, forNextWeek, forThisWeek, forTodayOrEarly} from "../../../helpers/dateFilter";
import IssueItem from "../../../components/issues/IssueItem";
import ProjectsContainer from "../ProjectsContainer";
import ProjectsFilters from "../../../components/projects/ProjectsFilters";
import ProjectsView from "../../../components/projects/ProjectsView";

class ListView extends Component {

    toIssueItemList(issues, filterFunction) {
        let {
            selectedIssueId,
            projects,
            currentPath,
            users
        } = this.props;

        return filterFunction(issues).map(issue => {
            let projectName = project ? project.name : undefined;
            if (!projectName && issue.projectId !== undefined) {
                projectName = projects.filter(project => project.id === issue.projectId)[0].name;
            }
            return (<IssueItem issue={issue}
                               projectName={projectName}
                               key={issue.id}
                               to={`${currentPath}/issues/${issue.id}`}
                               selected={selectedIssueId === issue.id.toString()}
                               users={users}
                               projectView/>);
        })
    }

    handleAddNewTask = (event) => {
        event.preventDefault();

    };

    render() {

        let {
            basePath,
            fullContent,
            selectedKey,
            headerText,
            issues
        } = this.props;

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
                <Col sm={fullContent ? 12 : 7} className={` ${style.projectsContainer} ${style.fullHeight}`}>
                    <div className={` ${style.background} ${style.fullHeight}`}>
                        <div className={style.mainHeader}>
                            {headerText ? headerText : "Проекты"}
                        </div>
                        <ProjectsView basePath={basePath}
                                      selectedMenuItem={selectedKey}/>
                        <ProjectsFilters/>
                        <AddNewItem onSubmit={this.handleAddNewTask}/>
                        <div>
                            {today}
                            {thisWeek}
                            {nextWeek}
                            {later}
                        </div>
                    </div>
                </Col>
            </Col>
        )
    }

}

export default ListView;