import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {Menu} from "../../constants/Constants";
import ListView from "./views/ListView";
import TableView from "./views/TableView";

class ProjectsRoutes extends Component {

    render() {

        let {
            projects,
            issues
        } = this.props;

        return (
            <Switch>
                <Route exact path={"/projects"} component={() => (
                    <ListView basePath={"/projects"}
                              issues={issues}
                              projects={projects}
                              selectedKey={Menu.LIST}
                              fullContent/>
                )}/>
                <Route exact path={"/projects/table"} component={() => (
                    <TableView basePath={"/projects"}
                               issues={issues}
                               projects={projects}
                               selectedKey={Menu.TABLE}
                               fullContent/>
                )}/>
                <Route exact path="/projects/timeline"/>
                <Route exact path="/projects/issues/:id"/>
                <Route exact path="/projects/:id"/>

                <Route exact path="/projects/:id/table"/>
                <Route exact path="/projects/:id/timeline"/>
            </Switch>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        issues: state.issues.list,
        projects: state.projects.list
    }
};

export default connect(mapStateToProps)(ProjectsRoutes);