import React from "react";
import { Link } from "gatsby";
import "./language-toggle.scss";

import englishLanguageImage from "../images/language-english@2x.png"
import swahiliLanguageImage from "../images/language-swahili@2x.png"

// import link from gatsby, wrap around img


function LanguageToggle({locale}) {
    console.log(locale);


    return(
        <>
        <div className="language-toggle">
            {locale == 'en' ? (
                <div>
                    <small className="language-toggle__title">Language</small>
                    <Link to="/sw">
                        <img className="language-toggle__image language-toggle__image--english" src={englishLanguageImage} />
                    </Link>
                </div>
              ) : (
                <div>
                    <small className="language-toggle__title">Language</small>
                    <Link to="/">
                        <img className="language-toggle__image language-toggle__image--swahili" src={swahiliLanguageImage} />
                    </Link>
                </div>
              )}

        </div>
        </>
    )
}

export default LanguageToggle
