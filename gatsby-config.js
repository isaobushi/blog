/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Isao's Blog",
    description: "This is my tech blog",
    keywords: "blog, gatsby, react, pwa",
    url: "https://www.isao.io",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrea Mele`,
        short_name: `AM`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `rgb(45, 55, 72)`,
        display: `standalone`,
      },
    },
  ],
}
