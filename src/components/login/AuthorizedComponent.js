import React, {Component} from "react"
import {connect} from "react-redux"
import {Redirect, Route, withRouter} from 'react-router-dom';

class AuthorizedComponent extends Component {

    render() {
        const {component: Component, logged, pending, token, ...rest} = this.props;
        return (
            <Route {...rest} render={() => {
                if (pending) {
                    return <div>Loading</div>
                }
                return logged && token ? <Component {...this.props}/> : <Redirect to={"/auth"}/>
            }}/>
        )
    }

}

const mapStateToProps = ({profile}) => ({
    logged: profile.logged,
    pending: profile.pending,
    token: profile.token
});

export default connect(mapStateToProps)(AuthorizedComponent);