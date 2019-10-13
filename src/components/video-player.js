import React from "react";

import "./video-player.scss";

class VideoPlayer extends React.Component {
    render() {
        const {...props} = this.props;

        return (
            <div className={props.className} aria-current={props.ariaCurrent}>
                <iframe
                    title={props.title}
                    src={props.url}
                    className={props.iframeClassName}
                    height="315"
                    width="560"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                ></iframe>
            </div>
        )
    }

    static defaultProps = {
        className: "video-player",
        iframeClassName: "video-player__iframe"
    }
}

export default VideoPlayer
