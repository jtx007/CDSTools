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
              maxWidth: 1200,
              linkImagesToOriginal: false,
              sizeByPixelDensity: false,
              backgroundColor: "none",
              wrapperStyle: "border:1px solid red;  margin-left:20px; height:300px; width: 1200px;"
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
