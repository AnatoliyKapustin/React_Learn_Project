import React, {Component} from "react";
import {Link, Route, withRouter} from "react-router-dom";
import {Form, Glyphicon} from "react-bootstrap";

import style from "./css/style.css"
import {createProject} from "../../actions/project";
import {connect} from "react-redux";

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

    handleCreateProject = (event) => {
        event.preventDefault();
        let {
            token
        } = this.props;
        this.props.createProject(this.project.value, token);
        this.project.value = "";
    };

    render() {

        let {
            projects
        } = this.props;

        return (
            <ul className={style.listContainer}>
                <li className={style.menuItem}>
                    <Route path="/issues" children={({match}) => (
                        <Link to="/issues">
                            <div className={match && style.active}>
                                <span>МОЯ РАБОТА</span>
                            </div>
                        </Link>
                    )}/>
                </li>
                <li className={style.menuItem}>
                    <Route path="/projects" children={({match}) => (
                        <Link to="/projects">
                            <div className={match && style.active}>
                                <span>ПРОЕКТЫ</span>
                                <Glyphicon glyph="glyphicon glyphicon-plus"
                                           className={style.addProjectPlus}
                                           onClick={this.handlePlusClick}/>
                            </div>
                        </Link>
                    )}/>
                </li>
                {
                    this.state.showInput ?
                        <Form inline className={style.addProject} onSubmit={this.handleCreateProject}>
                            <input type="text" ref={(project) => this.project = project}
                                   placeholder="Введите название"/>
                        </Form> : null
                }

                <Route path="/projects" render={() =>
                    <div className={style.scrollDiv}>
                        {projects.map(project =>
                            <Route key={project.id} path={`/projects/${project.id}`} children={({match}) => (
                                <Link to={`/projects/${project.id}`}>
                                    <div className={`${style.projectMenuItem} ${match && style.selected}`}>
                                        <Glyphicon className={style.glyphIcon} glyph="glyphicon glyphicon-list-alt"
                                                   aria-hidden="true"/>
                                        {project.name}
                                    </div>
                                </Link>
                            )}/>)}
                    </div>
                }/>
            </ul>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        token: state.profile.token,
        projects: state.projects.list

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (name, token) => dispatch(createProject(name, token)),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));