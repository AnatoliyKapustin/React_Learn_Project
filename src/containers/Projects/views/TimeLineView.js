import React, {Component} from "react";
import {Col} from "react-bootstrap";

import ProjectsView from "../../../components/projects/ProjectsView";
import ProjectsFilters from "../../../components/projects/ProjectsFilters";
import tableStyle from "../css/tableView.css";
import style from "../css/style.css";

class TimeLineView extends Component {

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
                        <ProjectsView elementStyle={tableStyle["table-view"]}
                                      basePath={basePath}
                                      selectedMenuItem={selectedKey}/>
                        <ProjectsFilters textBeforeFilter={"ПОКАЗАТЬ"}/>

                    </div>
                </Col>
            </Col>
        )
    }

}

export default TimeLineView;