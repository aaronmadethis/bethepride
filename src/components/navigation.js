import React from "react"
import classnames from "classnames";

import LanguageToggle from "./language-toggle"
import ImageButton from "./image-button"

import "./navigation.scss"

import logoImage from "../images/logo.svg"
import hamburgerIcon from "../images/icon-hamburger.svg"
import closeIcon from "../images/icon-close.svg"

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavClosed: true,
            previousScrollPosition: window.pageYOffset,
            visible: true
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.selectLink = this.selectLink.bind(this);
    }

    toggleClass(action, changedClass) {
        if (this.state.isNavClosed) {
            this.props.changeAppClass("add", "menu-is-open");
        } else {
            this.props.changeAppClass("remove", "menu-is-open");
        }

        this.setState(state => ({
            isNavClosed: !state.isNavClosed
        }));
    }

    selectLink(e, href) {
        e.preventDefault();

        this.toggleClass();
        this.goToSection(href);
    }

    goToSection(href) {
        setTimeout(() => {
            window.location = href;
        }, 350);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { previousScrollPosition } = this.state;
        const currentScrollPosition = window.pageYOffset;
        const visible = previousScrollPosition === currentScrollPosition;

        if (currentScrollPosition >= 0) {
            this.setState({
                previousScrollPosition: currentScrollPosition,
                visible
            });
        }

        if (window.scrollY === 0) {
            this.setState({
                previousScrollPosition: window.pageYOffset,
                visible: true
            });
        }
    };

    render() {
        const { locale, nav } = this.props;
        const navLinks = JSON.parse(nav.rawMarkdownBody);
        const { links } = navLinks;

        let { isNavClosed } = this.state;

        return(
            <header role="banner" className={classnames("header", {"header--show": !this.state.visible})}>
                <nav role="navigation" className="navigation">
                    <div className="navigation__menu">
                        <LanguageToggle locale={locale} />
                        <ul className="navigation__links">
                            {links.map((link, i) => {
                                return(
                                    <li key={i} className="navigation__link">
                                        <a
                                            key={i}
                                            href={link.href}
                                            className={link.className}
                                            onClick={(e) => this.selectLink(e, link.href)}
                                        >
                                            {link.text}

                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="navigation__branding">
                        <ImageButton
                            buttonClassName={isNavClosed ? 'navigation__toggle navigation__toggle--hamburger' : 'navigation__toggle navigation__toggle--close'}
                            clickEvent={(e) => this.toggleClass('add', 'menu-is-open')}
                            imageSource={isNavClosed ? hamburgerIcon : closeIcon}
                            imageAltText={navLinks.iconImageAlt}
                        />
                        <a href="#section__hero"><img
                            className="navigation__logo"
                            src={logoImage}
                            alt={navLinks.logoImageAlt}
                        /></a>
                    </div>
                </nav>
                <LanguageToggle locale={locale} />
                {links.slice(8).map((link, i) => {
                    return(
                        <a
                            id="header__tweet-button"
                            key={i}
                            href={link.href}
                            className={link.className}
                        >
                            {link.text}
                        </a>
                    )
                })}
            </header>
        )
    }
}

export default Navigation;
