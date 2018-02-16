import React from "react";
import {Menu} from "../../constants/Constants";
import UnderlineMenu from "../general/underlineMenu/UnderlineMenu";

export default function ProjectsView(props) {

    let {
        basePath,
        selectedMenuItem
    } = props;

    let menuOptions = [
        {
            key: Menu.LIST,
            text: "СПИСОК",
            to: basePath,
        },
        {
            key: Menu.TABLE,
            text: "ТАБЛИЦА",
            to: basePath + "/table",
        },
        {
            key: Menu.TIMELINE,
            text: "ВРЕМЕННАЯ ШКАЛА",
            to: basePath + "/timeline",
        }
    ];

    return (
        <UnderlineMenu selected={selectedMenuItem} withoutClickHandling options={menuOptions}/>
    );
}