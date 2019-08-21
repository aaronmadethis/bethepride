import React from "react";
import ReactDOM from "react-dom";
import Flickity from "./flickity-fixed";

import TextSlide from "./text-slide";
import AfricaMap from "./africa-map";

import "./vendor/flickity.min.css";
import "./population.scss";

import africaImage1 from "../images/africa-image1@2x.png"
import africaImage2 from "../images/africa-image2@2x.png"
import africaImage3 from "../images/africa-image3@2x.png"
import africaImage4 from "../images/africa-image4@2x.png"
import africaImage5 from "../images/africa-image5@2x.png"
import africaImage6 from "../images/africa-image6@2x.png"
import africaImage6Mobile from "../images/africa-image6-mobile@2x.png"

const flickityOptions = {
    setGallerySize: false,
    cellSelector: '.carousel__slide',
    cellAlign: 'center',
    wrapAround: false,
    pageDots: false,
    arrowShape: {
        x0: 20,
        x1: 60, y1: 50,
        x2: 65, y2: 45,
        x3: 30
    }
}

class Population extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
        };
        this.flkty = '';
    }

    componentDidMount = () => {
        // You can register events in componentDidMount hook
        this.flkty.on('settle', () => {
            // console.log(`current index is ${this.flkty.selectedIndex}`);
            this.setState(state => ({
                currentSlide: this.flkty.selectedIndex,
            }));
        })
    }


    render() {
        const {content} = this.props;
        const data = JSON.parse(content);

        let {currentSlide} = this.state;
        let mapClass = 'africa-map africa-map__0' +  currentSlide;

        return (
            <>
            <div className="population__content">
                <div className="population__range">
                    <div className={mapClass}>
                        <AfricaMap
                            activeClass={currentSlide == 0 ? 'active' : '' }
                            imageSource={africaImage1}
                            headline={data.slide1Headline}
                            subheadline={data.slide1Subheadline}
                        />
                        <AfricaMap
                            activeClass={currentSlide == 1 ? 'active' : '' }
                            imageSource={africaImage2}
                            headline={data.slide2Headline}
                        />
                        <AfricaMap
                            activeClass={currentSlide == 2 ? 'active' : '' }
                            imageSource={africaImage3}
                            headline={data.slide3Headline}
                        />
                        <AfricaMap
                            activeClass={currentSlide == 3 ? 'active' : '' }
                            imageSource={africaImage4}
                            headline={data.slide4Headline}
                        />
                        <AfricaMap
                            activeClass={currentSlide == 4 ? 'active' : '' }
                            imageSource={africaImage5}
                            headline={data.slide5Headline}
                            subheadline={data.slide5Subheadline}
                        />
                        <AfricaMap
                            activeClass={currentSlide == 5 ? 'active' : '' }
                            imageSource={africaImage6}
                            headline={data.slide6Headline}
                        />
                    </div>
                </div>
                <div className="population__carousel">
                    <Flickity
                        className={'carousel'}
                        elementType={'div'}
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        reloadOnUpdate = {false}
                        static
                        flickityRef={c => this.flkty = c}
                    >
                        <TextSlide
                            className={'carousel__slide'}
                            paragraph={data.slide1Paragraph}
                        />
                        <TextSlide
                            className={'carousel__slide'}
                            title={data.slide2Title}
                            paragraph={data.slide2Paragraph}
                        />
                        <TextSlide
                            className={'carousel__slide'}
                            paragraph={data.slide3Paragraph}
                        />
                        <TextSlide
                            className={'carousel__slide'}
                            title={data.slide4Title}
                            paragraph={data.slide4Paragraph}
                        />
                        <TextSlide
                            className={'carousel__slide'}
                            paragraph={data.slide5Paragraph}
                        />
                        <TextSlide
                            className={'carousel__slide'}
                            title={data.slide6Title}
                            paragraph={data.slide6Paragraph}
                        />
                    </Flickity>
                    <h3 className="slide-number-headline">
                        <span className={currentSlide == 0 ? 'active' : ''}>01</span>
                        <span className={currentSlide == 1 ? 'active' : ''}>02</span>
                        <span className={currentSlide == 2 ? 'active' : ''}>03</span>
                        <span className={currentSlide == 3 ? 'active' : ''}>04</span>
                        <span className={currentSlide == 4 ? 'active' : ''}>05</span>
                        <span className={currentSlide == 5 ? 'active' : ''}>06</span>
                        <span>/06</span>
                    </h3>
                </div>
            </div>
            </>
        )


    }
}

export default Population
