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
  plugins: [`gatsby-plugin-react-helmet`],
}
