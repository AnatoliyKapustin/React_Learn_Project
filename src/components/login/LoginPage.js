import React, {Component} from 'react';
import Page from './Page';
import {connect} from 'react-redux';
import style from './css/login.css'

class LoginPage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={`text-center ${style.container}`}>
                <Page/>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        uuid: state.uuid
    }
}

export default connect(mapStateToProps)(LoginPage)