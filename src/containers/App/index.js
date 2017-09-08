import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from '../../components/login/LoginPage'

import './style.scss';

const App = () =>
    <main>
        <Switch>
            {/*<Route path="/login" render{...props => {*/}
                {/*return (<LoginPage {...props}/>);*/}
            {/*}}*/}
            {/*/>*/}

            <Route path="/login" render={props => (
                true ? (
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
                false ? (
                    <PageTemplate {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}/>
                )
            )}/>
        </Switch>
    </main>

export default App;