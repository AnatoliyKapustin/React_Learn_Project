import React, {Component} from "react";
import {FormControl, FormGroup} from "react-bootstrap";

import style from "./css/style.css";

class DescriptionTextArea extends Component {

    state = {
        focused: false,
        placeholder: ""
    };

    onBlur = (event) => {
        event.preventDefault();

        let {
            onChange
        } = this.props;

        let {
            focused
        } = this.state;

        if (focused) {
            console.log("onChange");
            onChange(this.textarea.value);
        }
        this.setState({
            focused: false,
            placeholder: "Нажмите чтобы добавить описание"
        });
    };

    onFocus = () => {
        console.log("onFocus ");
        this.setState({
            focused: true
        })
    };

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            focused: true,
        })
    };

    render() {
        let {
            description,
        } = this.props;
        let {
            focused,
            placeholder
        } = this.state;

        if (!focused) {
            placeholder = "Нажмите чтобы добавить описание";
        } else {
            placeholder = "";
        }

        return (
            <div onClick={!focused && description && description !== "" ? this.handleClick : () => {
            }}>
                <form>
                    <FormGroup>
                        <FormControl inputRef={ref => {this.textarea = ref}}
                                     onFocus={this.onFocus}
                                     onBlur={this.onBlur}
                                     componentClass="textarea"
                                     className={`${style["description-textarea"]}`}
                                     placeholder={placeholder}
                                     rows={10}
                                     defaultValue={description}
                        />
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default DescriptionTextArea;