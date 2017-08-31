import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './style.scss';

const App = () =>
        <main>
            <Switch>
                <Route path="/" />
                <Route path="/" />
                <Redirect to="/"/>
            </Switch>
        </main>

export default App;