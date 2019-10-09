import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "./partners.scss"


class Partners extends React.Component {
    render() {
        const {content} = this.props;
        const data = JSON.parse(content);
        const {logos} = data;
        const logoPic = this.props.images.allFile.edges;

        return(
            <div className="partners__content">
                <h3 className="partners__headline">{data.headline}</h3>
                <ul className="partners__logos" role="img" aria-label="Partner logos">
                    {logos.map((logo, i) => {
                        function findPic(n){
                            return n.node.name === logo.pic
                        }

                        let pic = logoPic.filter(findPic);

                        return(
                            <li key={i} className="partners__logo">
                                <a href={logo.url} target="_blank">
                                    <img
                                        src={pic[0].node.publicURL}
                                        alt={logo.altText}
                                    />
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query PartnersQuery {
                allFile(filter: {sourceInstanceName: {eq: "partners"}}) {
                    edges {
                        node {
                            name
                            publicURL
                        }
                    }
                }
            }
        `}
        render={data => <Partners images={data} {...props} />}
    />
)
