import React, {Component} from 'react';
import Page from './Page';
import {connect} from 'react-redux';
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

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(LoginPage)