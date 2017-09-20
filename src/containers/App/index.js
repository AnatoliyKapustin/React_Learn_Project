import React, {Component} from 'react';
import {connect} from "react-redux"
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import LoginPage from '../../components/login/LoginPage'
import MainPageContainer from "../MainPage/MainPageContainer";

class App extends Component {

    render() {
        let token = this.props.token;
        return <BrowserRouter>
            <Switch>
                <Route path="/login" render={props => (
                    !token ? (
                        <LoginPage {...props}/>
                    ) : (
                        <Redirect to={{
                            pathname: '/',
                            state: {from: props.location}
                        }}/>
                    )
                )}
                />

                <Route path="/" render={props => (
                    token ? (
                        <MainPageContainer {...props}/>
                    ) : (
                        <Redirect to={{
                            pathname: '/login',
                            state: {from: props.location}
                        }}/>
                    )
                )}/>
            </Switch>
        </BrowserRouter>
    }
}

function mapStateToProps(state) {
    return {
        token: state.profile.token
    }
}

export default connect(mapStateToProps)(App);