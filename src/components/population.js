import React from "react"
import { StaticQuery, graphql } from "gatsby"

import TextSlide from "./text-slide"
import AfricaMap from "./africa-map"

import Flickity from "./flickity-fixed"

import "./vendor/flickity.min.css"
import "./population.scss"

const flickityOptions = {
    cellSelector: '.text-slide__slide',
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

class Population extends React.Component {
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
        const {slides, africaMaps} = data;
        const mapsPic = this.props.images.allFile.edges;

        let {currentSlide} = this.state;

        return (
            <div className="population__content">
                <div className="population__africa-maps" role="img" aria-label={data.africaMapsAriaLabel}>
                    {africaMaps.map((africaMap, i) => {
                        function findPic(n){
                            return n.node.name === africaMap.pic
                        }

                        let pic = mapsPic.filter(findPic);

                        return(
                            <AfricaMap
                                key={i}
                                headline={africaMap.headline}
                                subheadline={africaMap.subheadline}
                                pic={pic[0].node.publicURL}
                                className={currentSlide === i ? 'africa-map is-selected' : 'africa-map'}
                                ariaCurrent={currentSlide === i ? true : false}
                                ariaHidden={currentSlide === i ? false : true}
                            />
                        )
                    })}
                </div>
                <div className="population__slides">
                    <Flickity
                        className={'text-slide'}
                        elementType={'div'}
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        reloadOnUpdate = {false}
                        static
                        flickityRef={c => this.flkty = c}
                    >
                        {slides.map((slide, i) => {
                            return(
                                <TextSlide
                                    key={i}
                                    title={slide.title}
                                    paragraph={slide.paragraph}
                                    ariaCurrent={currentSlide === i ? true : false}
                                    ariaHidden={currentSlide === i ? false : true}
                                />
                            )
                        })}
                    </Flickity>
                    <h4 className="population__slide-number-headline">
                        {slides.map((slide, i) => {
                            return(
                                <span
                                    key={i}
                                    className={currentSlide === i ? 'is-selected' : ''}>0{i + 1}
                                </span>
                            )
                        })}
                        <span>/0{slides.length}</span>
                    </h4>
                </div>
            </div>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query AfricaMapsQuery {
                allFile(filter: {sourceInstanceName: {eq: "africa-maps"}}) {
                    edges {
                        node {
                            name
                            publicURL
                        }
                    }
                }
            }
        `}
        render={data => <Population images={data} {...props} />}
    />
)
