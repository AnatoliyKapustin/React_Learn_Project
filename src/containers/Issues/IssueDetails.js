import React, {Component} from "react"
import ItemDetailsHeader from "../../components/general/itemDetailsHeader/ItemDetailsHeader";

class IssueDetails extends Component {

    render() {

        let {
            name
        } = this.props.issue;

        return (
            <div>
                <ItemDetailsHeader headerText={name}/>
            </div>
        );
    }

}

export default IssueDetails;