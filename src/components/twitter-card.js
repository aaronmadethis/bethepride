import React from "react"
import "./twitter-card.scss"

const TwitterCard = ({person, buttonText, pic}) => {
    const {name, handle, title} = person;
    // console.log(person);



    function handleClick(e) {
        var width  = 575,
            height = 400,
            left   = (window.innerWidth  - width)  / 2,
            top    = (window.innerHeight - height) / 2,
            url    = "http://twitter.com/share?text=testing",
            opts   = 'status=1' +
                        ',width='  + width  +
                        ',height=' + height +
                        ',top='    + top    +
                        ',left='   + left;

            // xurl = url + '&url=' + $(this).data('url');

            window.open(url, 'twitter', opts);
            
        e.preventDefault();
        console.log('The link was clicked.');
    }
    

    return(
        <div className="twitter-card">
            <button onClick={handleClick}>
                <div>
                    <small className="small small--tiny small--bold">{name}</small>
                    <small className="small small--tiny highlight">{handle}</small>
                    <small className="small small--tiny">{title}</small>
                    <div className="button button--primary button-inline">
                        {buttonText}
                    </div>
                </div>
                <div>
                    <img src={pic} />
                </div>
            </button>
        </div>
    )
}

export default TwitterCard