import React, {Component} from "react";

import style from "./detailsHeader.css";
import {Button, Dropdown, MenuItem} from "react-bootstrap";
import IssueToProjectDropdown from "../../issues/IssueToProjectDropdown";

class ItemDetailsHeader extends Component {

    optionsToMenuItem = (options, onSelect) => {
        return options.map((option, i) => (
            <MenuItem key={i} eventKey={option.actionType} onSelect={onSelect}>
                {option.text}
            </MenuItem>
        ))
    };

    render() {

        let {
            componentStyles,
            headerText,
            options,
            onSelect,
            bottomComponent: IssueToProjectDropdown,
        } = this.props;

        return (
            <div className={`${style.header} ${componentStyles ? componentStyles.orangeStripe : ""}`}>
                <div className={style["header-text"]}>{headerText}</div>
                <div className={style["header-buttons"]}>
                    <Button className={style["header-option"]}>
                        <i className={`fa fa-link ${style.LinkAwesomeIcon}`} aria-hidden="true"/>
                    </Button>
                    <Dropdown id="settings" className={style["dropdown-button"]}>
                        <Dropdown.Toggle noCaret>
                            <i className="fa fa-ellipsis-h" aria-hidden="true"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={style["options-menu"]}>
                            {
                                options ? this.optionsToMenuItem(options, onSelect) : null
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {
                    IssueToProjectDropdown ? <IssueToProjectDropdown/> : null
                }
            </div>
        )
    }

}

export default ItemDetailsHeader;