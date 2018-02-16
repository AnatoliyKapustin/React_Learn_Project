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
        let menuItems = [];
        Object.values(items).forEach((status) => {
            menuItems.push(
                <MenuItem key={status.key}>
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
            onSelect
        } = this.props;
        console.log("test");
        [...items].forEach((status) => {
            console.log("sssss: " + status)
        });

        return (
            <Dropdown id={id} bsStyle="link" className={styles.wrapper}>
                <Dropdown.Toggle bsStyle="link" className={styles.minimizeDropdown}>
                    <div>
                        СТАТУС: Любой
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.statusMenu}>
                    {this.menuItems(items)}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default IssuesDropdownFilter;