import React from "react";

import "./_buttons.scss";

import downArrowIcon from "../images/icon-arrow-down.svg"
import upArrowIcon from "../images/icon-arrow-up.svg"

class AccordianButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isSectionClosed: true };
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass(e) {
        e.preventDefault();

        this.setState(state => ({
            isSectionClosed: !state.isSectionClosed
        }));
    }

    render() {
        const { ...props } = this.props;
        const { isSectionClosed } = this.state;

        return (
            <button
                className={ isSectionClosed ? "accordian-button" : "accordian-button accordian-button--open" }
                type="button"
                onClick={(e) => this.toggleClass(e)}
                aria-label={ isSectionClosed ? props.buttonText : props.buttonTextAlternate }
                aria-pressed={ isSectionClosed ? false : true }
            >
                <span className="accordian-button__button-text">{ isSectionClosed ? props.buttonText : props.buttonTextAlternate }</span>
                <img
                    className="accordian-button__arrow"
                    src={ isSectionClosed ? downArrowIcon : upArrowIcon}
                    alt={ isSectionClosed ? "down arrow icon" : "up arrow icon"}
                />
            </button>
        )
    }

    static defaultProps = {
        buttonText: "View More",
        buttonTextAlternate: "View Less"
    }
}

export default AccordianButton
