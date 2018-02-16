import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import ListView from "./views/ListView";
import {Menu} from "../../constants/Constants";
import TableView from "./views/TableView";

class ProjectsRoutes extends Component {

    constructor(props){
        super(props);
        console.log("constructor")
    }

    render() {

        let {
            projects,
            issues
        } = this.props;
        console.log("switch");
        return (
            <Switch>
                <Route exact path="/projects" component={() => (
                    <ListView issues={issues}
                              projects={projects}
                              selectedKey={Menu.LIST}
                              fullContent/>
                )}/>
                <Route strict exact path="/projects/table" component={() => (
                    <TableView issues={issues}
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

export default withRouter(connect(mapStateToProps)(ProjectsRoutes));