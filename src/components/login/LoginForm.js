import React, {Component} from 'react';
import Logo from './Logo';
import AlertMessage from './AlertMessage';
import InputLighter from './InputLighter';
import {connect} from 'react-redux';
import {Button, Form, FormGroup} from 'react-bootstrap';
import styles from './css/login.css';
import {loginUser} from '../../actions/login';
import {withRouter} from "react-router-dom"

class LoginForm extends Component {

    componentWillMount() {
        this.props.token && this.props.logged && this.props.history.push("/");
    }

    componentWillReceiveProps(newProps) {
        const {logged, token} = newProps;
        logged && token && this.props.history.push("/");
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.loginUser(this.login.value, this.password.value);
    };

    render() {
        let message = this.props.failMessage && <AlertMessage message={this.props.failMessage}/>;
        let inputLighter = this.props.failMessage && <InputLighter message={this.props.failMessage}/>;
        return (
            <Form onSubmit={::this.handleSubmit}>
                <Logo/>
                {message}
                <FormGroup>
                    {inputLighter}
                    <input type='text'
                           name="email"
                           placeholder="Эл.почта"
                           ref={(login) => this.login = login}
                           defaultValue={this.props.login}/>
                </FormGroup>
                <FormGroup>
                    <input type='password'
                           name="password"
                           placeholder="Пароль"
                           ref={(password) => this.password = password}
                           defaultValue={this.props.password}/>
                </FormGroup>
                <Button type="submit" bsStyle="primary" className={`pull-right ${styles.btn_xl}`}>Вход</Button>
            </Form>
        )
    }
}

const mapStateToProps = ({profile}) => {
    return {
        login: profile.login,
        password: profile.password,
        logged: profile.logged,
        token: profile.token,
        failMessage: profile.failMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (login, password) => dispatch(loginUser(login, password)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm))