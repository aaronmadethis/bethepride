import React from "react"

import Person from "./person"
import VideoPlayer from "./video-player"
import VideoSlide from "./video-slide"

import Flickity from "./flickity-fixed"
import Media from 'react-media'

import "./vendor/flickity.min.css"
import "./unsung-heroes.scss"

import lionImage from "../images/lion-image.jpg"

const flickityOptions = {
    cellSelector: '.video-slide__slide',
    cellAlign: 'left',
    wrapAround: false,
    pageDots: false,
    watchCSS: true,
    prevNextButtons: false
}

class UnsungHeroes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0,
        };

        this.flkty = '';
        this.selectSlide = this.selectSlide.bind(this);
    }

    componentDidMount = () => {
        let windowWidth = window.innerWidth;

        if (windowWidth <= 599) {
            this.flkty.on('scroll', () => {
                this.setState(state => ({
                    currentSlide: this.flkty.selectedIndex,
                }));
            })
        }
    }

    selectSlide(e, slideNumber) {
        e.preventDefault();

        let windowWidth = window.innerWidth;

        if (windowWidth >= 1024) {
            this.setActiveSlide(slideNumber);
        }
    }

    setActiveSlide(slideNumber) {
        this.setState(state => ({
            currentSlide: slideNumber
        }));
    }

    render() {
        const {content} = this.props;
        const data = JSON.parse(content);
        const {people, videos, slides} = data;

        let {currentSlide} = this.state;

        return(
            <>
            <div className="unsung-heroes__content">
                <div className="unsung-heroes__heading">
                    <h2 className="unsung-heroes__headline">{data.headline}</h2>
                    <p className="unsung-heroes__subheadline">{data.subheadline}</p>
                </div>
                <div className="unsung-heroes__video">
                    {videos.map((video, i) => {
                        return(
                            <VideoPlayer
                                key={i}
                                className={currentSlide === i ? 'video-player is-selected' : 'video-player'}
                                title={video.title}
                                url={video.url}
                                ariaCurrent={currentSlide === i ? true : false}
                            />
                        )
                    })}
                </div>
                <div className="unsung-heroes__people">
                    <div className="unsung-heroes__person">
                        {people.map((person, i) => {
                            return(
                                <Person
                                    key={i}
                                    className={currentSlide === i ? 'person is-selected' : 'person'}
                                    name={person.name}
                                    title={person.title}
                                    ariaCurrent={currentSlide === i ? true : false}
                                />
                            )
                        })}
                    </div>
                    <div className="unsung-heroes__carousel">
                            <Media queries={{
                                small: "(max-width: 599px)",
                                medium: "(min-width: 600px)"
                            }}>
                                {matches => (
                                    <div>
                                    {matches.small && <Flickity
                                            className={'video-slide'}
                                            elementType={'div'}
                                            options={flickityOptions}
                                            disableImagesLoaded={false}
                                            reloadOnUpdate = {false}
                                            static
                                            flickityRef={c => this.flkty = c}
                                            >
                                            {slides.map((slide, i) => {
                                                return(
                                                    <VideoSlide
                                                        key={i}
                                                        slideNumber={i + 1}
                                                        url={slide.url}
                                                        name={slide.name}
                                                        title={slide.title}
                                                        clickEvent={(e) => this.selectSlide(e, i)}
                                                        className={currentSlide === i ? 'video-slide__slide is-active' : 'video-slide__slide'}
                                                        alt={slide.imageAltText}
                                                        ariaCurrent={currentSlide === i ? true : false}
                                                    />
                                                )
                                            })}
                                        </Flickity>}
                                        {matches.medium && <div>
                                            {slides.map((slide, i) => {
                                                return (
                                                    <VideoSlide
                                                        key={i}
                                                        slideNumber={i + 1}
                                                        url={slide.url}
                                                        name={slide.name}
                                                        title={slide.title}
                                                        clickEvent={(e) => this.selectSlide(e, i)}
                                                        className={currentSlide === i ? 'video-slide__slide is-active' : 'video-slide__slide'}
                                                        alt={slide.imageAltText}
                                                        ariaCurrent={currentSlide === i ? true : false}
                                                    />
                                                )
                                            })}
                                        </div>}
                                    </div>
                                )}
                            </Media>
                    </div>
                    <div className="unsung-heroes__copy">
                        <div
                            className="unsung-heroes__paragraph"
                            dangerouslySetInnerHTML={{__html:data.paragraph}}
                        />
                        <img className="unsung-heroes__image" src={lionImage} alt={data.lionImageAlt} />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default UnsungHeroes

const FlickityComponent = ({ flickityOptions, flktyCallback, slides, currentSlide }) => {
    return <Flickity
        className={'video-slide'}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate={false}
        static
        flickityRef={c => flktyCallback = c}
    >
        {slides.map((slide, i) => {
            return (
                <VideoSlide
                    key={i}
                    slideNumber={i + 1}
                    url={slide.url}
                    name={slide.name}
                    title={slide.title}
                    clickEvent={(e) => this.selectSlide(e, i)}
                    className={currentSlide === i ? 'video-slide__slide is-active' : 'video-slide__slide'}
                    alt={slide.imageAltText}
                    ariaCurrent={currentSlide === i ? true : false}
                />
            )
        })}
    </Flickity>
};
