import * as React from 'react';
import {Component} from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import LoginPage from '../../components/login/LoginPage'

import './style.scss';

class App extends Component {
    render() {
        let uuid = this.props.uuid;
        console.log("uuid: " + uuid)
        return <BrowserRouter>
            <Switch>
                <Route path="/login" render={props => (
                    !uuid ? (
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
                    uuid ? (
                        <PageTemplate {...props}/>
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

export default App;