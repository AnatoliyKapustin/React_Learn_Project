import React, {Component} from "react";
import {Link, Route, withRouter} from "react-router-dom";
import {Glyphicon} from "react-bootstrap";

import style from "./css/style.css"

class Menu extends Component {

    state = {
        showInput: false,
    };

    constructor(props) {
        super(props)
    }

    handlePlusClick = () => {
        this.setState({
            showInput: true
        });
    };

    render() {

        const {match} = this.props;

        return (
            <ul className={style.ListContainer}>
                <li>
                    <Route exact path="/issues" children={({match}) => (
                        <Link to="issues">
                            <div className={match && style.active}>
                                <span>МОЯ РАБОТА</span>
                            </div>
                        </Link>
                    )}/>
                </li>
                <li>
                    <Route exact path="/projects" children={({match}) => (
                        <Link to="projects">
                            <div className={match && style.active}>
                                <span>ПРОЕКТЫ</span>
                                <Glyphicon glyph="glyphicon glyphicon-plus"
                                           className={style.AddProjectPlus}
                                           onClick={this.handlePlusClick}/>
                            </div>
                        </Link>
                    )}/>
                </li>
                {
                    this.state.showInput ?
                        <div>
                            <input type="text" className={style.ProjectNameInput}/>
                        </div> : null
                }
                <Route exact path="/projects" render={() => (
                    <li>
                        <ul>
                            <li>adasd</li>
                        </ul>
                    </li>
                )}/>
            </ul>
        )
    }

}

export default withRouter(Menu);