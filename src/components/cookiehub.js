import React from "react";

class CookieHub extends React.Component {
    render() {
        const {...props} = this.props;

        return (
            <div>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149496370-1"></script>
                <script type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                                var gtagId = 'UA-149496370-1';
                                window['ga-disable-' + gtagId] = true;
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                            `,
                        }}
                    />
                <script src="https://cookiehub.net/cc/b492869a.js"></script>
                <script type="text/javascript" 
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
                            });`
                    }}
                />
            </div>
        )
    }
}

export default CookieHub