import React, {Component} from "react"
import {Redirect, Route, Switch} from "react-router-dom";
import Issues from "./Issues";
import {connect} from "react-redux";
import {byId} from "../../helpers/dateFilter";


class IssuesRoutes extends Component {

    render() {

        let {
            issues
        } = this.props;

        return (
            <Switch>
                <Route path="/issues" component={() => (
                    <Issues issues={issues}/>
                )}/>
                <Route exact path="/issues/:id" render={(props) => {
                    let selectedId = props.match.params.id;
                    let issue = byId(issues, selectedId);
                    if (!issue) {
                        return <Redirect to="/issues"/>
                    }
                    return <Issues issues={issues}
                                   selectedIssue={issue}
                                   halfView/>
                }}/>
            </Switch>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        issues: state.issues.list
    }
};

export default connect(mapStateToProps)(IssuesRoutes);