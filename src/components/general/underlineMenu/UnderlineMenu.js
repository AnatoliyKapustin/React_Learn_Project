import React, {Component} from "react";
import {Link} from "react-router-dom";

import styles from "./css/underlineItems.css";

class UnderlineMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {selected: props.selected}
    }

    componentWillReceiveProps(nextProps) {
        this.setState = {
            selected: nextProps.selected
        }
    }

    handleSelect = (key) => {
        let {onSelect} = this.props;
        return event => {
            event.preventDefault();
            if (onSelect) {
                onSelect(key);
            }
            this.setState({
                selected: key,
            });
        }
    };

    render() {
        let {
            menuStyle,
            selectedStyle,
            options = [],
            withoutClickHandling,
        } = this.props;

        let {
            selected,
        } = this.state;

        return (
            <div className={`${styles.menu} ${menuStyle ? menuStyle : ""}`}>
                {
                    options.map(option => (
                        <Link key={option.key} to={option.to}>
                            <div
                                className={`${styles.option} ${option.key === selected ? `${selectedStyle || ""} ${styles.selected}` : ""}`}
                                onClick={!withoutClickHandling ? this.handleSelect(option.key) : event => {
                                }}>
                                {option.text}
                            </div>
                        </Link>
                    ))
                }
            </div>
        )
    }
}

export default UnderlineMenu;