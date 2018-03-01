import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import ProjectsRoutes from "../Projects/ProjectsRoutes";
import IssuesRoutes from "../Issues/IssuesRoutes";

class ContentLayout extends Component {

    render() {
        return (
            <Switch>
                <Route path="/issues" component={IssuesRoutes}/>
                <Route path="/projects" component={ProjectsRoutes}/>
            </Switch>
        )
    }
}

export default ContentLayout;