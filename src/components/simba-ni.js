import React from "react"
import { StaticQuery, graphql } from "gatsby"

import VideoPlayer from "./video-player"
import AccordianButton from "./accordian-button"
import ThumbnailButton from "./thumbnail-button"
import AboutPerson from "./about-person"

import "./simba-ni.scss"

class SimbaNi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAboutPeopleClosed: true,
            currentSlide: 0
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.selectThumbnail = this.selectThumbnail.bind(this);
    }

    toggleClass(e) {
        e.preventDefault();

        this.setState(state => ({
            isAboutPeopleClosed: !state.isAboutPeopleClosed
        }));
    }

    selectThumbnail(e, i) {
        e.preventDefault();

        this.setState(state => ({
            currentSlide: i
        }));
    }

    render() {
        const { content } = this.props;
        const data = JSON.parse(content);
        const { thumbnails, people } = data;
        const thumbnailPic = this.props.images.allFile.edges;

        let {currentSlide} = this.state;

        return(
            <div className="simba-ni__content">
                <div className="simba-ni__heading">
                    <h2 className="simba-ni__headline">{data.headline}<br/><span>{data.headlineAlt}</span></h2>
                    <p className="simba-ni__subheadline">{data.subheadline}</p>
                </div>
                <div className="simba-ni__columns">
                    <div className="simba-ni__video">
                        <VideoPlayer
                            className="video-player is-selected"
                            url={data.videoUrl}
                            title={data.iframeTitle}
                        />
                    </div>
                    <div className="simba-ni__accordian-button">
                        <AccordianButton />
                        <div className="accordian-button__toggle-section">
                            <div className="simba-ni__about-people">
                                <p className="simba-ni__title">{data.title}</p>
                                <ul className="simba-ni__thumbnails" role="img" aria-label="Thumbnail image of each person">
                                    {thumbnails.map((thumbnail, i) => {
                                        function findPic(n) {
                                            return n.node.name === thumbnail.pic
                                        }

                                        let pic = thumbnailPic.filter(findPic);

                                        return(
                                            <li key={i} className="simba-ni__thumbnail" aria-current={currentSlide === i ? true : false}>
                                                <ThumbnailButton
                                                    buttonClassName={currentSlide === i ? 'is-selected' : ''}
                                                    clickEvent={(e) => this.selectThumbnail(e, i)}
                                                    pic={pic[0].node.publicURL}
                                                    imageAltText={thumbnail.imageAltText}
                                                />
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="simba-ni__people">
                                    {people.map((person, i) => {
                                        function findPic(n) {
                                            return n.node.name === person.pic
                                        }

                                        let pic = thumbnailPic.filter(findPic);

                                        return(
                                            <AboutPerson
                                                key={i}
                                                activeClass={currentSlide === i ? 'about-person is-selected' : 'about-person'}
                                                aboutPersonImageSource={pic[0].node.publicURL}
                                                aboutPersonImageAltText={person.imageAltText}
                                                aboutPersonName={person.name}
                                                aboutPersonTitle={person.title}
                                                aboutPersonParagraph={person.paragraph}
                                                ariaCurrent={currentSlide === i ? true : false}
                                                ariaHidden={currentSlide === i ? false : true}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="simba-ni__paragraph">{data.paragraph}</p>
                </div>
            </div>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query ThumbnailsQuery {
                allFile(filter: {sourceInstanceName: {eq: "thumbnails"}}) {
                    edges {
                        node {
                            name
                            publicURL
                        }
                    }
                }
            }
        `}
        render={data => <SimbaNi images={data} {...props} />}
    />
)
