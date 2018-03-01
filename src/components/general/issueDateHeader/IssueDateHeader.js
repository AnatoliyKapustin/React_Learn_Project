import React, {Component} from "react";

import style from "./issueDateHeader.css";
import {Badge} from "react-bootstrap";

class IssueDateHeader extends Component {

    render() {

        let {
            onClickHeader,
            headerStyle,
            icon,
            header,
            date,
            count
        } = this.props;

        return (
            <div className={`${style.header} ${headerStyle}`} onClick={onClickHeader ? onClickHeader : undefined}>
                {icon}
                <span className={style.headerText}>{header}</span>
                <span className={style.headerText}>{date}</span>
                <Badge pullRight className={`${style.badge} text-center`}>{count}</Badge>
            </div>
        )
    }

}

export default IssueDateHeader;