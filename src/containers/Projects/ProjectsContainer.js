import React, {Component} from "react";

import style from "./css/style.css"
import {Collapse} from "react-bootstrap";

class ProjectsContainer extends Component {

    state = {
        collapsible: false,
        expanded: true
    };

    static defaultProps = {
        showAddIssue: false
    };

    constructor(props) {
        super(props);
        if (props.expanded) {
            this.state = {
                expanded: props.expanded
            };
        }
    }

    handleHeaderClick = () => {
        this.setState({expanded: !this.state.expanded});
    };

    render() {
        let {
            header,
            items
        } = this.props;

        let {
            expanded
        } = this.state;

        return (
            <div className={`${style.projectPanelContainer}`}>
                <div className={``}>
                    <div className={``} onClick={this.handleHeaderClick}>
                        <i className={`fa fa-play ${expanded ? "" : ""}`} aria-hidden="true"/>
                        {header}
                    </div>
                    <Collapse in={expanded}>
                        <div>
                            {items}
                        </div>
                    </Collapse>
                </div>
            </div>
        )
    }

}

export default ProjectsContainer;