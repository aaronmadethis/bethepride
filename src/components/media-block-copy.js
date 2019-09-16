import React from "react"

import "./media.scss"

class MediaBlockCopy extends React.Component {
    render() {
        const { ...props } = this.props;

        return(
            <div className={props.className}>
                <h5 className={props.titleClassName}>{props.title}</h5>
                <p>
                    <a
                        href={props.href}
                    >
                        {props.linkText}
                    </a>
                </p>
            </div>
        )
    }

    static defaultProps = {
        className: "media__copy",
        titleClassName: "media__title"
    }
}

export default MediaBlockCopy
