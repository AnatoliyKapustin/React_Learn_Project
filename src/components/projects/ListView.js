import React, {Component} from "react";
import {Col} from "react-bootstrap";
import {Route, Switch} from "react-router-dom";

import projects from "./css/projects.css"

class ListView extends Component {

    render() {

        let {headerTitle} = this.props;

        return (
            <div>
                <div className={styles.GeneralHeader}>
                    {headerTitle ? headerTitle : "Проекты"}
                </div>
            </div>
        )
    }

}

export default ListView