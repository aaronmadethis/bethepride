/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
exports.onRenderBody = ({ setPostBodyComponents }) => {

    setPostBodyComponents([
        <script key="1" async src="https://www.googletagmanager.com/gtag/js?id=UA-149496370-1" />,
        <script key="2" type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `
                    var gtagId = 'UA-149496370-1';
                    window['ga-disable-' + gtagId] = true;
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                `
            }}
        />,
        <script key="3" src="https://cookiehub.net/cc/b492869a.js" />,
        <script key="4" type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `
                    window.addEventListener("load", function() {
                    window.cookieconsent.initialise({
                        onInitialise: function(status) {
                            if (this.hasConsented('required')) {
                            }
                            if (this.hasConsented('analytics')) {
                                window['ga-disable-UA-149496370-1'] = false;
                                gtag('config', gtagId);
                            }
                        },
                        onAllow: function(category) {
                            if (category == 'required') {
                            }
                            if (category == 'analytics') {
                                window['ga-disable-UA-149496370-1'] = false;
                                gtag('config', gtagId);
                            }
                        },
                        onRevoke: function(category) {
                            if (category == 'required') {
                            }
                            if (category == 'analytics') {
                                window['ga-disable-UA-149496370-1'] = true;
                            }
                        }
                    })
                    });
                `
            }}
        />
    ])
}