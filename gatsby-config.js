/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "PDBTools",
    menuLinks: [
      { name: "Home", link: "/" },
      {
        name: "API reference",
        link: "/api",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`@pauliescanlon/gatsby-remark-sticky-table`],
      },
    },
    {
      resolve: `@pauliescanlon/gatsby-remark-sticky-table`,
      options: {
        height: 350,
        backgroundColor: "#ffffff",
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
