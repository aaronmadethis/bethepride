import React from "react";

import "./_buttons.scss"

class PrimaryButton extends React.Component {
    render() {
        const {...props} = this.props;

        return (
            <button
                className={props.buttonClassName}
                onClick={props.clickEvent}
                type={props.type}
            >
                <span className={props.buttonTextClassName}>{props.buttonText}</span>
            </button>
        )
    }

    static defaultProps = {
        buttonClassName: "primary-button",
        type: "button"
    }
}

export default PrimaryButton
