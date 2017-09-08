import React, {Component} from 'react';
import Logo from './Logo';
import {connect} from 'react-redux';
import {Form, FormGroup, Button} from 'react-bootstrap'
import styles from './css/login.css'

class Page extends Component {

    render() {
        return (
            <Form>
                <Logo/>
                <FormGroup>
                    <input type='text' name="email" placeholder="Эл.почта"/>
                </FormGroup>
                <FormGroup>
                    <input type='password' name="password" placeholder="Пароль"/>
                </FormGroup>
                <Button type="submit" bsStyle="primary" className={`${styles.btn_xl}`}>Вход</Button>
            </Form>
        )
    }

}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Page)