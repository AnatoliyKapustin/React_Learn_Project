import React, {Component} from 'react';
import Page from './Page';
import style from './css/login.css'

class LoginPage extends Component {

    render() {
        return (
            <div className={`text-center ${style.container}`}>
                <Page/>
            </div>
        )
    }

}

export default LoginPage;