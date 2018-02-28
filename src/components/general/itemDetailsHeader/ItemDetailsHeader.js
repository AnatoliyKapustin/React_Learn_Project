import React, {Component} from "react";

import style from "./detailsHeader.css";
import {Button, Dropdown} from "react-bootstrap";

class ItemDetailsHeader extends Component {

    render() {

        let {
            componentStyles,
            headerText
        } = this.props;

        return (
            <div className={`${style.header} ${componentStyles ? componentStyles.orangeStripe : ""}`}>
                <div className={style["header-text"]}>{headerText}</div>
                <div className={style["header-buttons"]}>
                    <Button className={style["header-option"]}>
                        <i className={`fa fa-link ${style.LinkAwesomeIcon}`} aria-hidden="true"/>
                    </Button>
                    <Dropdown id="settings" className={style["dropdown-button"]}>
                        <Dropdown.Toggle className={style.HeaderOption} noCaret>
                            <i className="fa fa-ellipsis-h" aria-hidden="true"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={style.SettingsMenu}>
                            {

                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        )
    }

}

export default ItemDetailsHeader;