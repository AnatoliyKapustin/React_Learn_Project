import React, {Component} from "react";
import {Dropdown, MenuItem} from "react-bootstrap";
import styles from "./dropdown.css";
import {issueStatuses} from "../../../constants/Constants";

class IssuesDropdownFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {selected: props.selected}
    }

    styleFromName = (item) => {
        switch (item) {
            case issueStatuses.ACTIVE:
                return styles.active;
            case issueStatuses.DONE:
                return styles.done;
            case issueStatuses.POSTPONED:
                return styles.postponed;
            case issueStatuses.CANCELED:
                return styles.canceled;
            default:
                console.log("Not match")
        }
    };

    menuItems = (items) => {
        let {
            onSelect
        } = this.props;
        let menuItems = [];
        Object.values(items).forEach((status) => {
            menuItems.push(
                <MenuItem key={status.key}
                          eventKey={status.key}
                          onSelect={onSelect}>
                    <div className={`${styles.IssueStatus} ${this.styleFromName(status)}`}/>
                    <div className={styles.IssueStatusName}>{status.text}</div>
                </MenuItem>
            )
        });
        return menuItems;
    };

    render() {
        let {
            items = {},
            id,
            textBeforeFilter,
            statusFilter
        } = this.props;

        return (
            <Dropdown id={id} bsStyle="link" className={styles.wrapper}>
                {
                    textBeforeFilter ?
                        <div className={`${textBeforeFilter ? styles.textBeforeFilter : ""}`}>
                            {textBeforeFilter ? textBeforeFilter : ""}
                        </div> : null
                }
                <Dropdown.Toggle bsStyle="link" className={styles.minimizeDropdown}>
                    <div>
                        СТАТУС: {statusFilter ?
                        <span className={`${styles["selected-name"]} ${this.styleFromName(issueStatuses[statusFilter])}`}>{issueStatuses[statusFilter].text}</span> :
                        <span>Любой</span>}
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className={`${textBeforeFilter ? styles.statusMenuWithLabel : styles.statusMenu}`}>
                    {this.menuItems(items)}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default IssuesDropdownFilter;