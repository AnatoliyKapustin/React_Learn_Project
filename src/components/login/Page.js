import React, {Component} from 'react';
import Logo from './Logo';
import AlertMessage from './AlertMessage';
import InputLighter from './InputLighter';
import {connect} from 'react-redux';
import {Button, Form, FormGroup} from 'react-bootstrap';
import styles from './css/login.css';
import {loginUser} from '../../actions/login';

class Page extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        this.props.dispatch(loginUser(this.login.value, this.password.value));
        event.preventDefault();
    }

    render() {
        console.log("login: " + this.props.login)
        console.log("password: " + this.props.password)
        console.log("fail: " + this.props.failMessage)
        let message = this.props.failMessage && <AlertMessage message={this.props.failMessage}/>;
        let inputLighter = this.props.failMessage && <InputLighter message={this.props.failMessage}/>;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Logo/>
                {message}
                <FormGroup>
                    {inputLighter}
                    <input type='text' name="email" placeholder="Эл.почта" ref={(login) => this.login = login}/>
                </FormGroup>
                <FormGroup>
                    <input type='password' name="password" placeholder="Пароль"
                           ref={(password) => this.password = password}/>
                </FormGroup>
                <Button type="submit" bsStyle="primary" className={`pull-right ${styles.btn_xl}`}>Вход</Button>
            </Form>
        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.login.login,
        password: state.login.password,
        failMessage: state.login.failMessage
    }
}

export default connect(mapStateToProps)(Page)