import React from "react"
import "./twitter-card.scss"

const TwitterCard = ({person, buttonText, pic, personType}) => {
    const {name, handle, title} = person;

    function handleClick(e) {
        const url_base = "http://twitter.com/intent/tweet?text=";
        const url_empty = "&url=" + encodeURI("https:bethepride.com/");
        const locale = window.wildaid_locale;

        let message;
        let finalURL;

        if (person.personType === "politician" && locale === "en") {
            // message = " Tz is a world leader in #lion conservation. But our lions are in trouble, threatened with habitat loss & conflict with humans. Pls secure the future of #simba by drafting policy that helps both lions + people living with them. Take action at Bethepride.com #bethepride";
            message = " Tz is a world leader in #lion conservation. But our lions are in trouble, threatened w. habitat loss & conflict w. humans. Pls secure the future of #simba by drafting policy that helps both lions + people living with them. Bethepride.com #bethepride";
        }

        if (person.personType === "influencer" && locale === "en") {
            // message = "Lions are the most popular animal to see on safari, yet their future is threatened by habitat + prey loss, poaching + conflict with humans. They power our economy, our environment & our heritage! Join the movement to save the #lion at Bethepride.com #bethepride";
            message = " #lions are the most popular animal to see on safari, yet their future is threatened by habitat + prey loss, poaching + conflict with humans. They power our economy, our environment & our heritage! Join the movement at Bethepride.com #bethepride";
        }

        if (person.personType === "politician" && locale === "sw") {
            // message = " Tanzania inaongoza kwa uhifadhi wa #simba. Lakini simba wako hatarini, wakitishiwa na upotevu wa makazi+migogoro na binadamu.Tafadhali hakikisha kuwa simba wataendelea kuwepo kwa kutunga sera ambazo zinasaidia simba+watu wanaoishi nao.Tembelea Bethepride.com #bethepride";
            message = " Tanzania ni no.1 kwa uhifadhi wa #simba duniani. Lakini simba wetu wako hatarini kwasababu ya uharibifu wa makazi + migogoro na binaadamu. Hakikisha uwepo wa simba kwa kuunda sera rafiki kwa simba + watu wanaoishi nao. Bethepride.com #bethepride";
        }

        if (person.personType === "influencer" && locale === "sw") {
            // message = " Simba ndio wanyama maarufu zaidi kwa watalii, ila bado kesho yao inatishiwa na upotevu wa makazi + mawindo, ujangili + migogoro na binadamu. Wanaendeleza uchumi wetu, mazingira yetu & urithi wetu! Jiunge na harakati ya kumwokoa #simba hapa Bethepride.com #bethepride";
            message = " #simba ni mnyama maarufu kwa watalii, uhai wake unatishiwa na upotevu wa makazi + kupungua kwa chakula + ujangili + na migogoro na binadamu. Wanaumuhimu kwenye uchumi wetu, mazingira yetu & urithi wetu! Jiunge na harakati Bethepride.com #bethepride";
        }

        finalURL = url_base + encodeURIComponent(handle) + encodeURIComponent(message);

        let width  = 575,
            height = 400,
            left   = (window.innerWidth  - width)  / 2,
            top    = (window.innerHeight - height) / 2,
            url    = finalURL,
            opts   = 'status=1' +
                        ',width='  + width  +
                        ',height=' + height +
                        ',top='    + top    +
                        ',left='   + left;

            window.open(url, 'twitter', opts);

        e.preventDefault();
    }

    return(
        <div className="twitter-card">
            <button className="twitter-card__button-target" onClick={handleClick}>
                <div className="twitter-card__wrapper">
                    <div className="twitter-card__data" data-person-type={person.personType}>
                        <p className="twitter-card__name">{name}</p>
                        <p className="twitter-card__handle">{handle}</p>
                        <p className="twitter-card__title">{title}</p>
                        <a
                            href="#section__take-action"
                            className='twitter-card__button'
                        >
                            {buttonText}
                        </a>
                    </div>
                    <div className="twitter-card__image">
                        <img
                            src={pic}
                            alt={name}
                        />
                    </div>
                </div>
            </button>
        </div>
    )
}

export default TwitterCard
