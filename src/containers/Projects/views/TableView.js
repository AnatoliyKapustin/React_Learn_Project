import React, {Component} from "react";
import {Col, Table} from "react-bootstrap";

import style from "../css/style.css";
import ProjectsView from "../../../components/projects/ProjectsView";
import ProjectsFilters from "../../../components/projects/ProjectsFilters";

class TableView extends Component {

    render() {

        let {
            basePath,
            selectedKey,
            headerText,
            issues,
            fullContent
        } = this.props;

        return (
            <Col sm={10} className={`${style.mainContainer} ${style.fullHeight}`}>
                <Col sm={fullContent ? 12 : 7} className={` ${style.projectsContainer} ${style.fullHeight}`}>
                    <div className={` ${style.background} ${style.fullHeight}`}>
                        <ProjectsView basePath={basePath}
                                      selectedMenuItem={selectedKey}/>
                        <ProjectsFilters/>
                        <Table responsive>
                            <thead>
                            <tr>
                                <th></th>
                                <th>
                                    <div>Заголовок</div>
                                </th>
                                <th>Начало</th>
                                <th>Срок выполнения</th>
                                <th>Длительность</th>
                                <th>Статус</th>
                                <th>Исполнители</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr></tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Col>
        )
    }

}

export default TableView;