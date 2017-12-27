import React, {Component} from "react";
import {Glyphicon} from "react-bootstrap"

import style from "./css/style.css"
import AddNewIssueInput from "./AddNewItemInput";

class AddNewItem extends Component {

    state = {
        showInput: false,
    };

    handleShowInputClick = () => {
        this.setState({
            showInput: true
        });
    };

    render() {

        let{
            onSubmit
        } = this.props;

        return (
            <div className={style.addNewItemContainer}>
                {
                    this.state.showInput ? <AddNewIssueInput onSubmit={onSubmit}/> :
                        <div className={style.addNewItemCursor} onClick={this.handleShowInputClick}>
                            <Glyphicon glyph="glyphicon glyphicon-plus"/>
                            <span className={style.addNewItemText}>Новая задача</span>
                        </div>
                }
            </div>
        )
    }

}

export default AddNewItem;