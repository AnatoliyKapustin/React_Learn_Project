import React, {Component} from "react";
import style from "./css/style.css";
import {Col} from "react-bootstrap";
import AddNewItem from "../../components/general/AddNewItem";
import ProjectViewSwitch from "./components/ProjectViewSwitch"
import {forLater, forNextWeek, forThisWeek, forTodayOrEarly} from "../../helpers/dateFilter";
import connect from "react-redux/es/connect/connect";
import ProjectsFilters from "./components/ProjectsFilters";
import ProjectsContainer from "./components/ProjectsContainer";
import IssueItem from "../../components/issues/IssueItem";

class Projects extends Component {

    toIssueItemList(issues, filterFunction) {
        let {
            selectedIssueId,
            projects,
            project,
            currentPath,
            users,
        } = this.props;

        return filterFunction(issues).map(project => {
            let projectName = project ? project.name : undefined;
            if (!projectName && project.projectId !== undefined) {
                projectName = projects.filter(project => project.id === project.projectId)[0].name;
            }
            return (<IssueItem issue={project}
                               projectName={projectName}
                               key={project.id}
                               to={`${currentPath}/issues/${project.id}`}
                               selected={selectedIssueId === project.id.toString()}
                               users={users}
                               projectView/>);
        })
    }

    handleAddNewTask = (event) => {
        event.preventDefault();

    };

    render() {

        let {
            fullContent,
            headerText,
            projects
        } = this.props;

        let today = null;
        let thisWeek = null;
        let nextWeek = null;
        let later = null;

        if (forTodayOrEarly(projects).length > 0) {
            today = <ProjectsContainer header="Сегодня или раньше"
                                       items={this.toIssueItemList(projects, forTodayOrEarly)}
                                       open/>
        }

        if (forThisWeek(projects).length > 0) {
            thisWeek = <ProjectsContainer header="Эта неделя"
                                          items={this.toIssueItemList(projects, forThisWeek)}
                                          open/>
        }

        if (forNextWeek(projects).length > 0) {
            nextWeek = <ProjectsContainer header="Следующая неделя"
                                          items={this.toIssueItemList(projects, forNextWeek)}
                                          open/>
        }

        if (forLater(projects).length > 0) {
            later = <ProjectsContainer header="Позже"
                                       items={this.toIssueItemList(projects, forLater)}
                                       open/>
        }

        return (
            <Col sm={10} className={`${style.mainContainer} ${style.fullHeight}`}>
                <Col sm={fullContent ? 12 : 7} className={` ${style.projectsContainer} ${style.fullHeight}`}>
                    <div className={` ${style.background} ${style.fullHeight}`}>
                        <div className={style.mainHeader}>
                            {headerText ? headerText : "Проекты"}
                        </div>
                        <ProjectViewSwitch/>
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

const mapStateToProps = (state) => {
    return {
        projects: state.projects.list
    }
};

export default connect(mapStateToProps)(Projects);