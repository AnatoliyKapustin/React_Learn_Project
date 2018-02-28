import React, {Component} from "react";

import style from "./css/projectDetails.css";
import ItemDetailsHeader from "../../components/general/itemDetailsHeader/ItemDetailsHeader";

class ProjectDetails extends Component {

    render() {

        let {
            name
        } = this.props.project;

        return (
            <div>
                <ItemDetailsHeader headerText={name}
                                   componentStyles={style}/>
            </div>
        )
    }

}

export default ProjectDetails;