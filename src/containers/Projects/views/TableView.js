import React, {Component} from "react";
import {Col, Table} from "react-bootstrap";

import ProjectsView from "../../../components/projects/ProjectsView";
import ProjectsFilters from "../../../components/projects/ProjectsFilters";
import tableStyle from "../css/tableView.css";
import style from "../css/style.css";

class TableView extends Component {

    render() {

        let {
            basePath,
            selectedKey,
            headerText,
            issues
        } = this.props;

        return (
            <Col sm={10} className={`${style.mainContainer} ${style.fullHeight}`}>
                <Col sm={12} className={` ${style.projectsContainer} ${style.fullHeight}`}>
                    <div className={` ${style.background} ${style.fullHeight}`}>
                        <div className={style.mainHeader}>
                            {headerText ? headerText : "Проекты"}
                        </div>
                        <ProjectsView elementStyle={tableStyle.tableView}
                                      basePath={basePath}
                                      selectedMenuItem={selectedKey}/>
                        <ProjectsFilters textBeforeFilter={"ПОКАЗАТЬ"}/>
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