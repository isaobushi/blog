/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "AM",
    description: "This is my tech blog",
    keywords: "blog, gatsby, react, pwa",
    url: "https://www.andreamele.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 675,
            },
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
          options: {
            tag: "symbol",
            name: "MyIcon",
            props: {
              className: "my-class",
              title: "example",
            },
            filters: [value => console.log(value)],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,

      options: {
        extensions: [`.mdx`, `.md`],

        gatsbyRemarkPlugins: [`gatsby-remark-autolink-headers`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrea Mele`,
        short_name: `AM`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `rgb(45, 55, 72)`,
        display: `standalone`,
        icon: `src/assets/img/avatarColor.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
  ],
};
