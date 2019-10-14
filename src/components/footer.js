import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "./footer.scss"

class Footer extends React.Component {
    render() {
        const {content} = this.props;
        const data = JSON.parse(content);
        const {links, icons} = data;
        const iconPic = this.props.images.allFile.edges;

        return(
            <div className="footer__content">
                {icons.slice(0, 1).map((icon, i) => {
                    function findPic(n){
                        return n.node.name === icon.pic
                    }

                    let pic = iconPic.filter(findPic);

                    return(
                        <div key={i} className="footer__logo">
                            <a href={icon.url}>
                                <img
                                    src={pic[0].node.publicURL}
                                    alt={icon.altText}
                                />
                            </a>
                        </div>
                    )
                })}

                <div className="footer__columns">
                    <ul className="footer__links">
                        {links.map((link, i) => {
                            return(
                                <li key={i} className="footer__link">
                                    <a href={link.href} className={link.className}>
                                        {link.text}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="footer__contact">
                        <p className="footer__title">{data.title}</p>
                        <p className="footer__paragraph" dangerouslySetInnerHTML={{ __html:data.address }} />
                        <p className="footer__paragraph" dangerouslySetInnerHTML={{ __html:data.addressOther }} />
                        <ul className="footer__icons">
                            {icons.slice(1).map((icon, i) => {
                                function findPic(n){
                                    return n.node.name === icon.pic
                                }

                                let pic = iconPic.filter(findPic);

                                return(
                                    <li key={i} className="footer__icon">
                                        <a href={icon.url}>
                                            <img
                                                src={pic[0].node.publicURL}
                                                alt={icon.altText}
                                            />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <p className="footer__paragraph">{data.paragraph}</p>
                    </div>
                </div>
                <div className="footer__copyright">
                    <small>
                        <a href={data.privacyURL}>{data.privacyText}</a>
                        <span dangerouslySetInnerHTML={{ __html: data.copyright }} />
                    </small>
                </div>
            </div>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query IconsQuery {
                allFile(filter: {sourceInstanceName: {eq: "icons"}}) {
                    edges {
                        node {
                            name
                            publicURL
                        }
                    }
                }
            }
        `}
        render={data => <Footer images={data} {...props} />}
    />
)
