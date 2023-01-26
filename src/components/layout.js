import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `YT1s`}/>
      <div className="layout">
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
