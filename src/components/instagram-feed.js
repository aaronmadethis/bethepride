import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "./instagram-feed.scss"



class InstagramFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isNavClosed: true };
    }

    render() {
        // const {content} = this.props;
        // const data = JSON.parse(content);
        const instaimages = this.props.insta.allInstaNode.edges;
        // console.log(instaimages[0].node.thumbnails[0]);

        return(
            <section className="component-instagram-feed">

                <div className="">
                    <div className="">
                        {instaimages.map((post, i) =>{
                                return(
                                    <img key={i} src={post.node.thumbnails[4].src} />
                                )
                            }
                        )}
                    </div>
                </div>
            </section>
        )
    }
}

// export default InstagramFeed

export default props => (
    <StaticQuery
        query={graphql`
            query InstaQuery {
                allInstaNode {
                    edges {
                        node {
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