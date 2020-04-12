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
        name: "page2",
        link: "/page-2",
      },
    ],
  },
  plugins: [`gatsby-plugin-react-helmet`],
}
