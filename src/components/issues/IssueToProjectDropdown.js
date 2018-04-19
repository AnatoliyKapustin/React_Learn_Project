import React, {Component} from "react";
import {Dropdown, Form, Glyphicon} from "react-bootstrap";

class IssueToProjectDropdown extends Component {

    state = {
        open: false
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let {
            onAddToNewProject
        } = this.props;
        onAddToNewProject(this.input.value);
        this.setState({
            open: false
        });
    };

    createHandleSelect = (projectId) => {
        return (event) => {
            event.preventDefault();
            let {
                onSelectProject,
            } = this.props;
            onSelectProject(projectId);
            this.setState({
                open: false
            });
        }
    };

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            open: true
        });
    };

    handleToggle = (isOpen, event) => {
        if (event.type !== "react-select" && isOpen !== this.state.open) {
            this.setState({
                open: isOpen
            });
        }
    };

    render() {
        let {
            issue,
            projects = [],
        } = this.props;

        let {
            projectId,
        } = issue;

        return (
            <Dropdown id="add-issue-to-project" bsStyle="link" open={this.state.open} onToggle={this.handleToggle}>
                <Dropdown.Toggle bsStyle="link" noCaret onClick={this.handleClick}>
                    {
                        projectId !== undefined ?
                            <span>{projects.filter((project) => project.id === projectId)[0].name}</span> :
                            [
                                <Glyphicon key="icon" glyph="glyphicon glyphicon-plus"/>,
                                <span key="label">Добавить в папку/проект</span>
                            ]
                    }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div>
                        <Form onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control" placeholder="Добавить в папку/проект"
                                   ref={input => this.input = input}/>
                        </Form>
                        {
                            projects.length === 0 ?
                                <div>
                                    Отсутсвуют папки для отображения
                                </div>
                                : projects.map(project => (
                                    <div key={project.id} onClick={this.createHandleSelect(project.id)}>
                                        <i className="fa fa-file-text-o" aria-hidden="true"/>
                                        {project.name}
                                    </div>
                                )
                                )
                        }
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default IssueToProjectDropdown;