import React, {Component} from "react";
import {Route} from "react-router-dom";
import {Col, Grid, Row} from "react-bootstrap"
import NavBar from "../../components/navbar/Navbar"
import Menu from "../../components/menu/Menu"
import ContentLayout from "../ContentLayout/ContentLayout"

import style from "./css/main.css"
import menu from "../../components/menu/css/style.css"

class PrimaryLayout extends Component {

    render() {
        return (
            <Grid fluid className={style.MainContainer}>
                <NavBar/>
                <Row className={style.ContentContainer}>
                    <Col sm={2} className={menu.menu}>
                        <Menu/>
                    </Col>
                    <ContentLayout/>
                </Row>
            </Grid>
        )
    }

}

export default PrimaryLayout;