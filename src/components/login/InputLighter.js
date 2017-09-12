import React, {Component} from 'react';
import style from './css/login.css'

class InputLighter extends Component {

    render() {
        return (
            <div className={`${style.lighter_wrapper} ${this.props.message ? '' : 'hide'}`}>
                <div className={style.input_light}>
                </div>
            </div>
        )
    }
}

export default InputLighter;