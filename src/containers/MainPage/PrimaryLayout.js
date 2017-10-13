import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {Col, Grid, Row} from "react-bootstrap"
import NavBar from "../../components/navbar/Navbar"
import Menu from "../../components/menu/Menu"
import Issues from "../../containers/Issues/Issues"
import Projects from "../../containers/Projects/Projects"

import style from "./css/main.css"
import menu from "../../components/menu/css/style.css"

class PrimaryLayout extends Component {

    render() {
        return (
            <Grid fluid className={style.MainContainer}>
                <NavBar/>
                <Row className={style.ContentContainer}>
                    <Col sm={2} className={menu.Menu}>
                        <Menu/>
                    </Col>
                    <Switch>
                        <Route path="/issues" component={Issues}/>
                        <Route path="/projects" component={Projects}/>
                    </Switch>
                </Row>
            </Grid>
        )
    }

}

export default PrimaryLayout;