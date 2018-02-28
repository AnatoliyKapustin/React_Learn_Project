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
            items,
        } = this.props;

        let {
            expanded
        } = this.state;

        return (
            <div className={`${style.projectPanelContainer}`}>
                <div className={style.pointerContainer}>
                    <div className={style.header} onClick={this.handleHeaderClick}>
                        <i className={`caret ${expanded ? style["caret-up"] : style["caret-down"]}`}
                           aria-hidden={expanded}/>
                        {header}
                    </div>
                    <Collapse className={style.collapseContainer} in={expanded}>
                        <div className={style.scrollDiv}>
                            {items}
                        </div>
                    </Collapse>
                </div>
            </div>
        )
    }

}

export default ProjectsContainer;