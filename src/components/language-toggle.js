import React from "react";
import { Link } from "gatsby";

import "./language-toggle.scss";

import englishLanguageImage from "../images/language-english@2x.png"
import swahiliLanguageImage from "../images/language-swahili@2x.png"

function LanguageToggle({locale}) {
    return(
        <>
        <div className="language-toggle">
            {locale === 'en' ? (
                <div>
                    <small className="language-toggle__title">Language</small>
                    <Link to="/sw">
                        <img
                            className="language-toggle__image"
                            src={englishLanguageImage}
                            alt="English language locale"
                        />
                    </Link>
                </div>
              ) : (
                <div>
                    <small className="language-toggle__title">Language</small>
                    <Link to="/">
                        <img
                            className="language-toggle__image"
                            src={swahiliLanguageImage}
                            alt="Swahili language locale"
                        />
                    </Link>
                </div>
              )}
        </div>
        </>
    )
}

export default LanguageToggle
