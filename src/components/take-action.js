import React from "react"
import { StaticQuery, graphql } from "gatsby"
import TwitterCard from "./twitter-card"

import "./take-action.scss"

class TakeAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isNavClosed: true };
    }
    render() {
        const {content} = this.props;
        const data = JSON.parse(content);
        const {people, buttonText, } = data;
        // const placeholder = this.props.images.allFile.edges[0].node.publicURL;
        const twitterPic = this.props.images.allFile.edges;

        return(
            <section className="take-action">
                <h4>{data.headline}<br/>{data.headlineAlt}</h4>
                <p>{data.subheadline}</p>

                <div className="take-action__twitter">
                    <div className="wrapper-take-action__twitter-cards">
                        {people.map((person, i) =>{
                          function findPic(n){
                            return n.node.name == person.pic
                          }
                          var pic = twitterPic.filter(findPic);
                          
                          return(
                            <TwitterCard key={i} person={person} buttonText={buttonText} pic={pic[0].node.publicURL}/>
                          )
                        }
                        )}
                    </div>
                </div>
            </section>
        )
    }
}

export default props => (
    <StaticQuery
      query={graphql`
      query MyQuery {
        allFile(filter: {sourceInstanceName: {eq: "twitter"}}) {
          edges {
            node {
              name
              publicURL
            }
          }
        }
      }      
      `}
      render={data => <TakeAction images={data} {...props} />}
    />
  )


