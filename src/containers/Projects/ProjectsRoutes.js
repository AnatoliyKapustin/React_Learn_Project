import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import ListView from "./views/ListView";
import {Menu} from "../../constants/constants";

class ProjectsRoutes extends Component {

    render() {

        let {
            projects,
            issues
        } = this.props;

        return (
            <Switch>
                <Route exact path="/projects" component={() => (
                    <ListView issues={issues}
                              projects={projects}
                              selectedKey={Menu.LIST}
                              fullContent/>
                )}/>
                <Route exact path="/projects/table"/>
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