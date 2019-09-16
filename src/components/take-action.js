import React from "react"
import { StaticQuery, graphql } from "gatsby"

import TwitterCard from "./twitter-card"
import PrimaryButton from "./primary-button"

import "./take-action.scss"

class TakeAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isNavClosed: true };
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass(e) {
        e.preventDefault();

        this.setState(state => ({
            isNavClosed: !state.isNavClosed
        }));
    }

    render() {
        const {content} = this.props;
        const data = JSON.parse(content);
        const {people } = data;
        const twitterPic = this.props.images.allFile.edges;

        return(
            <div className="take-action__content">
                <div className="take-action__heading">
                    <h2 className="take-action__headline">{data.headline}<br/><span>{data.headlineAlt}</span></h2>
                    <p className="take-action__paragraph">{data.paragraph}</p>
                </div>
                <div className={ this.state.isNavClosed ? "take-action__twitter-cards" : "take-action__twitter-cards take-action__twitter-cards--view-more" }>
                    {people.map((person, i) =>{
                        function findPic(n){
                            return n.node.name === person.pic
                        }

                        let pic = twitterPic.filter(findPic);

                        return(
                            <TwitterCard
                                key={i}
                                person={person}
                                buttonText={data.buttonTextTwitter}
                                pic={pic[0].node.publicURL}
                            />
                        )
                    })}
                </div>

                <div className="take-action__view-more-button">
                    <PrimaryButton
                        clickEvent={(e) => this.toggleClass(e)}
                        buttonText={data.buttonText}
                    />
                </div>
            </div>
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

