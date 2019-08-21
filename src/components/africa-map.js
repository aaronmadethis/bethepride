import React from "react";
import ReactDOM from "react-dom";

import "./africa-map.scss";

function AfricaMap(props) {
    // console.log(props);
    return (
        <>
        <div id={props.id} className={props.activeClass}>
            <img
                className={'africa-map__image'}
                src={props.imageSource}
                alt={props.headline}
            />
            <h2
                className={'africa-map__headline'}
                dangerouslySetInnerHTML={{__html:props.headline}}
            />
            <h3
                className={'africa-map__subheadline'}
                dangerouslySetInnerHTML={{__html:props.subheadline}}
            />
        </div>
        </>
    )
}

export default AfricaMap
