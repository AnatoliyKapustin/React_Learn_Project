import React, {Component} from "react";
import {Collapse} from "react-bootstrap"
import IssueItem from "../general/issueItem/IssueItem";
import IssueDateHeader from "../general/issueDateHeader/IssueDateHeader";

import style from "./css/style.css"
import AddNewItem from "../general/AddNewItem";
import {connect} from "react-redux";
import {createIssue} from "../../actions/issue";

class IssueItemPanel extends Component {

    state = {
        expanded: false,
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

    handleAddNewIssue = (event, input) => {
        event.preventDefault();
        let {
            user
        } = this.props;

        this.props.createIssue(input.value, user.uuid);
        input.value = "";
    };

    handleHeaderSelect = () => {
        this.setState({expanded: !this.state.expanded});
    };

    issuesToIssueItem = (issues) => {
        let {selectedIssueId} = this.props;
        console.log("issuse to item: ");
        issues.forEach(issue => console.log(issue))
        return issues.map(issue => {
            return (<IssueItem issue={issue}
                               key={issue.id}
                               to={`/issues/${issue.id}`}
                               selected={selectedIssueId === issue.id.toString()}/>)
        })
    };

    render() {
        let {
            header,
            startDate,
            endDate,
            text,
            to,
            filteredIssues,
            collapsible,
            showAddIssue
        } = this.props;

        let date = startDate && endDate ? startDate + " - " + endDate : startDate;

        return (
            <div className={`${style.issuePanelContainer}`}>
                <IssueDateHeader onClickHeader={collapsible ? this.handleHeaderSelect : null}
                                 header={header}
                                 date={date}
                                 count={filteredIssues.length}/>
                <Collapse in={this.state.expanded} className={style.collapseContainer}>
                    <div>
                        {showAddIssue ? <AddNewItem onSubmit={this.handleAddNewIssue}/> : ""}
                        <div className={style.scrollDiv}>
                            {this.issuesToIssueItem(filteredIssues)}
                        </div>
                    </div>
                </Collapse>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.profile.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createIssue: (name, uuid) => dispatch(createIssue(name, uuid))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueItemPanel);