import React from "react";

import "./_buttons.scss";

class LinkButton extends React.Component {

    render() {
        const { ...props } = this.props;

        return (
            <a
                className={props.buttonClassName}
                href={props.href}
                aria-label={props.buttonText}
            >
                {props.buttonText}
            </a>
        )
    }

    static defaultProps = {
        buttonClassName: "link-button"
    }
}

export default LinkButton
