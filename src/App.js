import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

class App extends Component {
    render() {
        return
        <BrowserRouter>
            <div className="">

            </div>
        </BrowserRouter>
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(App)