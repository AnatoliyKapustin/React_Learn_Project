import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {Menu} from "../../constants/Constants";
import ListView from "./views/ListView";
import TableView from "./views/TableView";
import TimeLineView from "./views/TimeLineView";
import {byId, filterIssuesByName, issuesInProject} from "../../helpers/dateFilter";
import {getAllUsers} from "../../actions/user";

class ProjectsRoutes extends Component {

    componentDidMount() {
        this.props.dispatch(getAllUsers())
    }

    render() {

        let {
            projects,
            issues,
            filterIssueName
        } = this.props;

        return (
            <Switch>
                <Route exact path={"/projects"} component={() => (
                    <ListView basePath="/projects"
                              issues={issues}
                              projects={projects}
                              selectedKey={Menu.LIST}
                              fullContent/>
                )}/>
                <Route exact path={"/projects/table"} component={() => (
                    <TableView basePath="/projects"
                               issues={issues}
                               projects={projects}
                               selectedKey={Menu.TABLE}
                               fullContent/>
                )}/>
                <Route exact path={"/projects/timeline"} component={() => (
                    <TimeLineView basePath="/projects"
                                  issues={issues}
                                  projects={projects}
                                  selectedKet={Menu.TIMELINE}
                                  fullContent/>
                )}/>
                <Route exact path="/projects/issues/:id" render={props => {
                    let selectedId = props.match.params.id;
                    let issue = byId(issues, selectedId);
                    if (!issue) {
                        return <Redirect to="/projects"/>
                    }

                    let project = byId(projects, selectedId);

                    return (
                        <ListView headerText={project ? headerText = project.name : null}
                                  basePath={`/projects/issues/${selectedId}`}
                                  issues={filterIssuesByName(issues, filterIssueName)}
                                  selectedProjectMenuItem={Menu.LIST}/>
                    )
                }}/>
                <Route exact path="/projects/:id" render={props => {
                    let selectedId = props.match.params.id;
                    let project = byId(projects, selectedId);
                    if (!project) {
                        return <Redirect to="/projects"/>
                    }
                    issues = issuesInProject(issues, project.id);
                    return (
                        <ListView headerText={project.name}
                                  basePath={`/projects/${selectedId}`}
                                  selectedProjectMenuItem={Menu.LIST}
                                  issues={filterIssuesByName(issues, filterIssueName)}
                                  users={users}
                                  project={project}/>
                    )
                }}/>

                <Route exact path="/projects/:id/table"/>
                <Route exact path="/projects/:id/timeline"/>
            </Switch>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        issues: state.issues.list,
        projects: state.projects.list,
        filterIssueName: state.filters.issueName
    }
};

export default connect(mapStateToProps)(ProjectsRoutes);