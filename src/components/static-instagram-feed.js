import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "./instagram-feed.scss"

class StaticInstagramFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isNavClosed: true };
    }

    render() {
        const instaimages = this.props.insta.allFile.edges;
        console.log(instaimages );

        return(
            <div className="instagram-feed">
                <div className="instagram-feed__posts">
                    {instaimages.slice(0, 9).map((post, i) =>{
                            return(
                                <div key={i} className="instagram-feed__post">
                                    <figure>
                                        <img
                                            className="instagram-feed__image"
                                            // src={post.node.childImageSharp.fixed.src}
                                            src={post.node.childImageSharp.resize.src}
                                            alt="Instagram post"
                                        />
                                        <figcaption className={'instagram-feed__caption'}>{post.node.caption}</figcaption>
                                    </figure>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query StaticInstaQuery {
                allFile(filter: {sourceInstanceName: {eq: "instagram-static"}}) {
                    edges {
                        node {
                            name
                            publicURL
                            childImageSharp {
                                fixed(width: 400, height: 400) {
                                    height
                                    width
                                    src
                                }
                                resize(width: 400, height: 400, fit: COVER, cropFocus: CENTER) {
                                    src
                                    height
                                    width
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => <StaticInstagramFeed insta={data} {...props} />}
    />
)