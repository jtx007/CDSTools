import React from 'react';
import Header from './Header';
import {graphql, StaticQuery} from 'gatsby'
import { Helmet } from "react-helmet"
import '../styles/styles.css'
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        ></Helmet>
        <Header className="navbarContainer"
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />{" "}
        <div
          
        >
          {children}
        </div>
      </>
    )}
  />
)

export default Layout;