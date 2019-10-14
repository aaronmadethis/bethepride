import React from "react";

import "./links.scss"

function Links(props) {
    return(
        <>
        <ul className="links">
            <li><a href="#">{props.linkTitle1}</a></li>
            <li><a href="#">{props.linkTitle2}</a></li>
            <li><a href="#">{props.linkTitle3}</a></li>
            <li><a href="#">{props.linkTitle4}</a></li>
            <li><a href="#">{props.linkTitle5}</a></li>
            <li><a href="#">{props.linkTitle6}</a></li>
            <li><a href="#">{props.linkTitle7}</a></li>
        </ul>
        </>
    )
}

export default Links
