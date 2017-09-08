import React, {Component} from 'react';
import image from './assets/logo-white.png'
import {Align} from 'react'

class Logo extends Component {

    render() {
        return (
            <div className="text-center">
                <img id="img_logo" src={image}/>
            </div>
        )
    }
}

export default Logo;