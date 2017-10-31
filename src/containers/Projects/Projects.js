import React, {Component} from "react";
import {Route} from "react-router-dom";
import style from "./css/style.css";
import {Col} from "react-bootstrap";

class Projects extends Component {

    render() {

        let {fullContent} = this.props;

        return (
            <Col sm={fullContent ? 7 : 5}
                 className={`${style.projectsContainer} ${style.fullHeight}`}>
            </Col>
        )
    }

}

export default Projects;