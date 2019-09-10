/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./_reset.scss"
import "./_settings.scss"
import "./_typography.scss"
import "./layout.scss"

const Layout = ({ children, locale, changeAppClass }) => {

    window.wildaid_locale = locale

    return (
        <>
        <div className="layout" locale={locale}>
            {children}
        </div>
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
