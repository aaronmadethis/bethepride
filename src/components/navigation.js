import React from "react"

import LanguageToggle from "./language-toggle"

import "./navigation.scss"

import logoImage from "../images/logo.svg"
import hamburgerIcon from "../images/icon-hamburger.svg"
import { isConditionalExpression } from "typescript";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isNavClosed: true };
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass(action, changedClass) {
        if(this.state.isNavClosed){
            this.props.changeAppClass("add", "menu-is-open");
        } else {
            this.props.changeAppClass("remove", "menu-is-open");
        }
        this.setState(state => ({
            isNavClosed: !state.isNavClosed
        }))
    }

    render() {
        const { locale, nav } = this.props;
        // const {nav} = this.props;
        var navLinks = JSON.parse(nav.rawMarkdownBody);


        return(
            <header>
                <nav className="navigation">
                    <div className="navigation__menu">
                        <button onClick={(e) => this.toggleClass('add', 'menu-is-open')} className="button button--hamburger"><img src={hamburgerIcon} /></button>
                        <div className="navigation__links">
                        {Object.keys(navLinks).map((keyName, i) =>
                            <a href="#" key={i}>{navLinks[keyName]}</a>
                        )}
                        </div>
                    </div>
                    <div className="navigation__logo">
                        <img src={logoImage} />
                    </div>
                </nav>
                <LanguageToggle locale={locale} />
            </header>
        )
    }
}

export default Navigation;
