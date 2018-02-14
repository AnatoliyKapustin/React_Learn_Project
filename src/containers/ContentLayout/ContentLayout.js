import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Issues from "../../containers/Issues/Issues"
import ProjectsRoutes from "../Projects/ProjectsRoutes";

class ContentLayout extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/issues" component={() => (
                    <Issues fullContent/>
                )}/>
                <Route exact path="/projects" component={() => (
                    <ProjectsRoutes/>
                )}/>
            </Switch>
        )
    }
}

export default ContentLayout;