import React from "react"

import PrimaryButton from "./primary-button"
import MediaBlockCopy from "./media-block-copy"
import MediaBlockImage from "./media-block-image"

import "./media.scss"

import portraitImage from "../images/portrait-image-placeholder.png"
import landscapeImage from "../images/landscape-image-placeholder.png"
import squareImage from "../images/square-image-placeholder.png"

class Media extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isNavClosed: true };
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass(e) {
        e.preventDefault();

        this.setState(state => ({
            isNavClosed: !state.isNavClosed
        }));
    }

    render() {
        const { content } = this.props;
        const data = JSON.parse(content);

        return(
            <div className="media__content">
                <div className="media__heading">
                    <h2 className="media__headline">{data.headline}<br/><span>{data.headlineAlt}</span></h2>
                </div>
                <div className={ this.state.isNavClosed ? "media__blocks" : "media__blocks media__blocks--view-more" }>
                    <div className="media__block media__block--portrait">
                        <MediaBlockImage
                            imageSource={portraitImage}
                            imageAltText={data.mediaBlocks[0].title}
                        />
                        <MediaBlockCopy
                            title={data.mediaBlocks[0].title}
                            href={data.mediaBlocks[0].href}
                            linkText={data.linkText}
                        />
                    </div>
                    <div className="media__block">
                        <MediaBlockCopy
                            title={data.mediaBlocks[1].title}
                            href={data.mediaBlocks[1].href}
                            linkText={data.linkText}
                        />
                    </div>
                    <div className="media__block media__block--landscape">
                        <MediaBlockCopy
                            title={data.mediaBlocks[2].title}
                            href={data.mediaBlocks[2].href}
                            linkText={data.linkText}
                        />
                        <MediaBlockImage
                            imageSource={landscapeImage}
                            imageAltText={data.mediaBlocks[2].title}
                        />
                    </div>
                    <div className="media__block media__block--square">
                        <MediaBlockImage
                            imageSource={squareImage}
                            imageAltText={data.mediaBlocks[3].title}
                        />
                        <MediaBlockCopy
                            title={data.mediaBlocks[3].title}
                            href={data.mediaBlocks[3].href}
                            linkText={data.linkText}
                        />
                    </div>
                    <div className="media__block media__block--portrait">
                        <MediaBlockImage
                            imageSource={portraitImage}
                            imageAltText={data.mediaBlocks[0].title}
                        />
                        <MediaBlockCopy
                            title={data.mediaBlocks[0].title}
                            href={data.mediaBlocks[0].href}
                            linkText={data.linkText}
                        />
                    </div>
                    <div className="media__block">
                        <MediaBlockCopy
                            title={data.mediaBlocks[1].title}
                            href={data.mediaBlocks[1].href}
                            linkText={data.linkText}
                        />
                    </div>
                    <div className="media__block media__block--landscape">
                        <MediaBlockCopy
                            title={data.mediaBlocks[2].title}
                            href={data.mediaBlocks[2].href}
                            linkText={data.linkText}
                        />
                        <MediaBlockImage
                            imageSource={landscapeImage}
                            imageAltText={data.mediaBlocks[2].title}
                        />
                    </div>
                    <div className="media__block media__block--square">
                        <MediaBlockImage
                            imageSource={squareImage}
                            imageAltText={data.mediaBlocks[3].title}
                        />
                        <MediaBlockCopy
                            title={data.mediaBlocks[3].title}
                            href={data.mediaBlocks[3].href}
                            linkText={data.linkText}
                        />
                    </div>
                </div>
                <div className="media__view-more-button">
                    <PrimaryButton
                        clickEvent={(e) => this.toggleClass(e)}
                        buttonText={data.buttonText}
                    />
                </div>
            </div>
        )
    }
}

export default Media
