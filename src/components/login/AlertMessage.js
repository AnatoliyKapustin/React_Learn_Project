import React, {Component} from 'react'
import Alert from 'react-bootstrap/lib/Alert'
import style from './css/login.css'
import {connect} from 'react-redux'

class AlertMessage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.message);
        return (
            <Alert className={`success ${this.props.message ? '' : 'hide'} ${style.alert_success_custom}`}>
                <p className="text-center">Введите действующий адрес эл. почты.</p>
            </Alert>
        )
    }

}

export default AlertMessage;