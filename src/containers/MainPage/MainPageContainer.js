import React, {Component} from "react";
import {Col, Row} from "react-bootstrap"
import NavBar from "../../components/navbar/Navbar"
import Menu from "../../components/menu/Menu"

import style from "./css/main.css"

class MainPageContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.main_container}>
                <NavBar/>
                <Row>
                    <Col xs={2}>
                        <Menu/>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default MainPageContainer;