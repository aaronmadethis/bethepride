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
        let current_lang = "en";

        if (typeof window !== `undefined`) {
            current_lang = window.wildaid_locale
        }

        const { ...props } = this.props;
        const { isSectionClosed } = this.state;

        let { buttonText, buttonTextAlternate} = this.props;

        if (current_lang !== "en") {
            buttonText = 'Tazama Muhtasari'
            buttonTextAlternate = 'Funga Muhtasari'
        }

        console.log(current_lang);

        return (
            <button
                className={ isSectionClosed ? "accordian-button" : "accordian-button accordian-button--open" }
                type="button"
                onClick={(e) => this.toggleClass(e)}
                aria-label={ isSectionClosed ? buttonText : buttonTextAlternate }
                aria-pressed={ isSectionClosed ? false : true }
            >
                <span className="accordian-button__button-text">{ isSectionClosed ? buttonText : buttonTextAlternate }</span>
                <img
                    className="accordian-button__arrow"
                    src={ isSectionClosed ? downArrowIcon : upArrowIcon}
                    alt={ isSectionClosed ? "down arrow icon" : "up arrow icon"}
                />
            </button>
        )
    }

    static defaultProps = {
        buttonText: "View Bios",
        buttonTextAlternate: "Close Bios"
    }
}

export default AccordianButton
