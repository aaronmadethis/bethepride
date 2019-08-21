import React from "react"
import "./video-feature.scss"

const VideoFeature = ({ content }) => {
    const data = JSON.parse(content)
    return(
        <section className="video-feature">
            <h2>{data.headline}</h2>
            <h5>{data.subheadline}</h5>
            <div>
                <p>(video placeholder)</p>
                <p>{data.paragraph}</p>
            </div>
        </section>
    )
}

export default VideoFeature
