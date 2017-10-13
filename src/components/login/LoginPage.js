import React, {Component} from 'react';
import LoginForm from './LoginForm';
import style from './css/login.css'

class LoginPage extends Component {

    render() {
        return (
            <div className={`text-center ${style.container}`}>
                <LoginForm/>
            </div>
        )
    }

}

export default LoginPage;