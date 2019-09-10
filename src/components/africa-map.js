import React from "react";

import "./africa-map.scss";

const AfricaMap = ({pic, headline, subheadline, ...props}) => {

    return(
        <div className={props.className} aria-current={props.ariaCurrent} aria-hidden={props.ariaHidden}>
            <img
                className={'africa-map__image'}
                src={pic}
                alt={headline}
            />
            <h3
                className={'africa-map__headline'}
                dangerouslySetInnerHTML={{__html:headline}}
            />
            <h4
                className={'africa-map__subheadline'}
                dangerouslySetInnerHTML={{__html:subheadline}}
            />
        </div>
    )
}

export default AfricaMap
