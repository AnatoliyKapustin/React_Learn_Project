import React, {Component} from "react";
import {Col} from "react-bootstrap"

import style from "./css/issues.css"

class Issues extends Component {

    render() {
        return (
            <Col sm={10} className={style.fullHeight}>
                <div className={style.IssuesContainer}>

                </div>
            </Col>
        )
    }

}

export default Issues;