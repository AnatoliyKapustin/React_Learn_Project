import React, {Component} from "react";

import style from "./detailsHeader.css";
import {Button, Dropdown, Glyphicon} from "react-bootstrap";

class ItemDetailsHeader extends Component {

    render() {

        let {
            componentStyles,
            headerText
        } = this.props;

        return (
            <div className={`${style.header} ${componentStyles ? componentStyles.orangeStripe : ""}`}>
                <div className={style["header-text"]}>{headerText}</div>
                <div className={style.HeaderButtons}>
                    <Button className={style.HeaderOption}>
                        <i className={`fa fa-link ${style.LinkAwesomeIcon}`} aria-hidden="true"/>
                    </Button>
                    <Dropdown id="settings">
                        <Dropdown.Toggle className={style.HeaderOption} noCaret>
                            <Glyphicon glyph={"glyphicon glyphicon-option-horizontal"}/>
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