import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import Issues from "../../containers/Issues/Issues"
import Projects from "../../containers/Projects/Projects"

class ContentLayout extends Component {

    render() {
        let {match} = this.props;
        return (
            <Switch>
                <Route exact path="/issues" component={() => (
                    <Issues fullContent/>
                )}/>
                <Route exact path="/projects" component={() => (
                    <Projects fullContent/>
                )}/>
            </Switch>
        )
    }

}

export default withRouter(ContentLayout);