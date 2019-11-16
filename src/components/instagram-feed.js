import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "./instagram-feed.scss"

class InstagramFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isNavClosed: true };
    }

    render() {
        const instaimages = this.props.insta.allInstaNode.edges;

        return(
            <div className="instagram-feed">
                <div className="instagram-feed__posts">
                    {instaimages.slice(0, 9).map((post, i) =>{
                            return(
                                <div key={i} className="instagram-feed__post">
                                    <figure>
                                        <img
                                            className="instagram-feed__image"
                                            src={post.node.thumbnails[4].src}
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
            query InstaQuery {
                allInstaNode {
                    edges {
                        node {
                            preview
                            original
                            caption
                            thumbnails {
                                src
                            }
                        }
                    }
                }
            }
        `}
      render={data => <InstagramFeed insta={data} {...props} />}
    />
)