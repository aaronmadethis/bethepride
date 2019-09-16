import React from "react";

import "./person.scss";

function Person(props) {
    return (
        <>
        <div className={props.className} aria-current={props.ariaCurrent}>
            <h4 className="person__name">{props.name}</h4>
            <p className="person__title">{props.title}</p>
        </div>
        </>
    )
}

export default Person
