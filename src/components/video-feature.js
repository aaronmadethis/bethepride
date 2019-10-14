import React from "react"
import VideoPlayer from "./video-player"

import "./video-feature.scss"

const VideoFeature = ({ content }) => {
    const data = JSON.parse(content)
    return(
        <>
        <div className="video-feature__content">
            <h2 className="video-feature__headline">{data.headline}</h2>
            <p className="video-feature__subheadline">{data.subheadline}</p>
            <div className="video-feature__row">
                <div className="video-feature__video">
                    <VideoPlayer
                        className="video-player is-selected"
                        title={data.title}
                        url={data.url}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default VideoFeature
