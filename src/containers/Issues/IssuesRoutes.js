import React, {Component} from "react"
import {Route, Switch} from "react-router-dom";
import {Menu} from "../../constants/Constants";
import Issues from "./Issues";
import {connect} from "react-redux";


class IssuesRoutes extends Component {

    render() {

        let {
            issues
        } = this.props;

        return (
            <Switch>
                <Route path="/issues" component={() => (
                    <Issues basePath="/issues"
                            issues={issues}/>
                )}/>
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