import React from "react"
import "./footer.scss"

import logoImage from "../images/logo.svg"
import instagramIcon from "../images/icon-instagram.svg"
import facebookIcon from "../images/icon-facebook.svg"
import twitterIcon from "../images/icon-twitter.svg"

const Footer = ({ content }) => {
    const data = JSON.parse(content)
    return(
        <>
            <div className="footer__logo">
                <img src={logoImage} />
            </div>
            <div className="footer__links">
                <a href="#">{data.linkTitle1}</a>
                <a href="#">{data.linkTitle2}</a>
                <a href="#">{data.linkTitle3}</a>
                <a href="#">{data.linkTitle4}</a>
                <a href="#">{data.linkTitle5}</a>
                <a href="#">{data.linkTitle6}</a>
                <a href="#">{data.linkTitle7}</a>
            </div>
            <div className="footer__contact">
                <h3>{data.contactTitle}</h3>
                <div className="social">
                    <a href=""><img src={instagramIcon} alt="WildAid Instagram" /></a>
                    <a href=""><img src={facebookIcon} alt="WildAid Facebook" /></a>
                    <a href=""><img src={twitterIcon} alt="WildAid Twitter" /></a>
                </div>
            </div>
        </>
    )
}

export default Footer
