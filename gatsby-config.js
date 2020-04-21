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
        name: "API Reference",
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
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: { 
              maxWidth: 550, 
              wrapperStyle: "margin-right:100px"
            },
          },
          `@pauliescanlon/gatsby-remark-sticky-table`,
        ],
      },
    },
    {
      resolve: `@pauliescanlon/gatsby-remark-sticky-table`,
      options: {
        height: 350,
        backgroundColor: "#ffffff",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
  ],
}
