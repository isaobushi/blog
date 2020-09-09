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
    url: "https://www.isao.io",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              wrapperStyle: "border-radius: 5px; max-width: 100%;",
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Default Dark+",
              inlineCode: {
                marker: "•",
                theme: {
                  default: "Default Light+",
                  dark: "Default Dark+",
                },
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/post-images`,
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
        icon: `src/assets/img/avatarColor.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
  ],
};
