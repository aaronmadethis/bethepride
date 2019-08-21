import React from "react"
import { Link, graphql } from "gatsby"
import rehypeReact from "rehype-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "../components/navigation"
import Hero from "../components/hero"
import Population from "../components/population"
import VideoFeature from "../components/video-feature"
import TakeAction from "../components/take-action"
import SimbaNi from "../components/simba-ni"
import UnsungHeroes from "../components/unsung-heroes"
import InstagramFeed from "../components/instagram-feed"
import LionLife from "../components/lion-life"
import Media from "../components/media"
import Footer from "../components/footer"
import { isConstructorDeclaration } from "typescript";

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        "component-hero": Hero,
        "component-population": Population,
        "component-video-feature": VideoFeature,
        "component-take-action": TakeAction,
        "component-simba-ni": SimbaNi,
        "component-unsung-heroes": UnsungHeroes,
        "component-instagram-feed": InstagramFeed,
        "component-lion-life": LionLife,
        "component-media": Media,
        "component-footer": Footer
    },
  }).Compiler

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appClasses: ['app-init'],
        };

        // This binding is necessary to make `this` work in the callback
        this.changeAppClass = this.changeAppClass.bind(this);
    }

    changeAppClass(action, changedClass) {
        let { appClasses } = this.state;

        if (action == "remove") {
            if(appClasses.includes(changedClass)){
                appClasses = appClasses.filter(function(ele){
                    return ele != changedClass;
                });
            }
        }

        if (action == "add"){
            if(!appClasses.includes(changedClass)){
                appClasses.push(changedClass);
            }
        }

        this.setState(state => ({
            appClasses: appClasses
        }));
    }

    render() {
        const post = this.props.data.copy.childMarkdownRemark;
        const nav = this.props.data.navigation.childMarkdownRemark;
        const { pageContext: { locale } } = this.props;
        const { appClasses } = this.state;

        let finalClasses = appClasses.join(" ");

        return(
            <div className={finalClasses}>
                <Layout locale={locale}>
                    <SEO title="Home" />
                    <Navigation locale={locale} nav={nav} changeAppClass={this.changeAppClass} />
                    {
                        renderAst(post.htmlAst)
                    }
                </Layout>
            </div>
        )
    }
}

export default IndexPage;

export const pageQuery = graphql`
query GetPageMarkdown($locale: String) {
    copy: file(childMarkdownRemark: {frontmatter: {language: {eq: $locale}}}, name: {eq: "index"}) {
        childMarkdownRemark {
            htmlAst
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
    navigation: file(childMarkdownRemark: {frontmatter: {language: {eq: $locale}}}, name: {eq: "navigation"}) {
        childMarkdownRemark {
            id
            rawMarkdownBody
        }
    }
}
`

/*
Language tutorial used
https://medium.com/significa/i18n-with-gatsby-528607b4da81
*/
