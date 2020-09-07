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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}

{
  /* <Helmet>
      <title>Isao's Blog</title>
      <meta name="description" content="Isao personal blog" />
      <meta name="keywords" content="blog, gatsby, react, pwa" />
      <meta name="robots" content="index, follow" />
      <html lang="en" />
    </Helmet> */
}
