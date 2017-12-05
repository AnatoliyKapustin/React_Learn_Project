import React, {Component} from "react";
import {Badge, Collapse} from "react-bootstrap"

import style from "./css/style.css"
import IssueItem from "./IssueItem";
import AddNewIssue from "./AddNewIssue";

class IssueItemPanel extends Component {

    state = {
        collapsible: false
    };

    static defaultProps = {
        count: 0,
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

    handleHeaderSelect = () => {
        this.setState({expanded: !this.state.expanded});
    };

    issuesToIssueItem = (issues) => {
        return <IssueItem issue={issue}/>
    };

    render() {
        let {
            header,
            startDate,
            endDate,
            text,
            to,
            filteredIssues,
            showAddIssue,
            collapsible,
            expanded
        } = this.props;

        let date = startDate && endDate ? startDate + " - " + endDate : startDate;

        return (
            <div className={`${style.issuePanelContainer}`}>
                <div className={style.header} onClick={collapsible ? this.handleHeaderSelect : undefined}>
                    <span className={style.headerText}>{header}</span>
                    <span className={style.headerText}>{date}</span>
                    <Badge pullRight className={`${style.badge} text-center`}>{this.props.count}</Badge>
                </div>
                <Collapse in={this.state.expanded}>
                    <div>
                        {showAddIssue ? <AddNewIssue/> : ""}
                        {this.issuesToIssueItem(filteredIssues)}
                    </div>
                </Collapse>
            </div>
        )
    }

}

export default IssueItemPanel;