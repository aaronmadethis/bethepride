import React from "react"
import { StaticQuery, graphql } from "gatsby"

import ImageSlide from "./image-slide"

import Flickity from "./flickity-fixed"

import "./vendor/flickity.min.css"
import "./exhibition.scss"


const flickityOptions = {
    setGallerySize: true,
    cellSelector: '.image-slide__slide',
    cellAlign: 'left',
    wrapAround: false,
    pageDots: false,
    arrowShape: {
        x0: 20,
        x1: 60, y1: 50,
        x2: 65, y2: 45,
        x3: 30
    }
}

class Exhibition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
        };
        this.flkty = '';
    }

    componentDidMount = () => {
        this.flkty.on('scroll', () => {
            this.setState(state => ({
                currentSlide: this.flkty.selectedIndex,
            }));
        })
    }

    render() {
        const {content} = this.props;
        const data = JSON.parse(content);
        const {slides, events} = data;
        const slidePic = this.props.images.allFile.edges;
        const {currentSlide} = this.state;

        return (
            <div className="exhibition__content">
                <h2 className="exhibition__headline">{data.headline}</h2>
                <div className="exhibition__carousel">
                    <Flickity
                        className={'image-slide'}
                        elementType={'div'}
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        reloadOnUpdate = {false}
                        static
                        flickityRef={c => this.flkty = c}
                    >
                        {slides.map((slide, i) => {
                            function findPic(n){
                                return n.node.name === slide.pic
                            }

                            let pic = slidePic.filter(findPic);

                            return(
                                <ImageSlide
                                    key={i}
                                    pic={pic[0].node.publicURL}
                                    imageAltText={slide.imageAltText}
                                    caption={slide.caption}
                                    ariaCurrent={currentSlide === i ? true : false}
                                />
                            )
                        })}
                    </Flickity>
                </div>
                <p className="exhibition__paragraph">{data.paragraph}</p>
                <div className="exhibition__info">
                    {events.map((event, i) => {
                        return(
                            <div key={i}>
                                <p className="exhibition__title">{event.title}</p>
                                <p>{event.when}</p>
                                <p>{event.where}</p>
                                <p>{event.more}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query SlidesImgQuery {
                allFile(filter: {sourceInstanceName: {eq: "exhibition"}}) {
                    edges {
                        node {
                            name
                            publicURL
                        }
                    }
                }
            }
        `}
        render={data => <Exhibition images={data} {...props} />}
    />
)
