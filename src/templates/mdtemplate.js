import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import '../styles/styles.css'
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Layout />
        <div className="blog-post-container animated fadeInUp slow">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h4>Last Updated: {frontmatter.date}</h4>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            
          </div>
        </div>
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
