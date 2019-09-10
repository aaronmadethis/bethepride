import React from "react"

import PrimaryButton from "./primary-button"

import "./learn.scss"

class Learn extends React.Component {
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
        const {links} = data;

        return(
            <div className="learn__content">
                <div className="learn__heading">
                    <h3 className="learn__headline">{data.headline}</h3>
                    <p className="learn__subheadline">{data.subheadline}</p>
                </div>
                <ul className={ this.state.isNavClosed ? "learn__links" : "learn__links learn__links--view-more" }>
                    {links.map((link, i) => {
                        return(
                            <li key={i} className="learn__link">
                                <a
                                    href={link.href}
                                    className={link.className}
                                >
                                    {link.text}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="learn__view-more-button">
                    <PrimaryButton
                        clickEvent={(e) => this.toggleClass(e)}
                        buttonText={data.buttonText}
                    />
                </div>
            </div>
        )
    }
}

export default Learn
