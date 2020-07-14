module.exports = {
  siteMetadata: {
    siteUrl: `https://www.gregoralbrecht.com`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gregoralbrecht.com`,
        short_name: `Gregor`,
        description: `todo`,
        start_url: `/`,
        background_color: `#00000`,
        theme_color: `#00000`,
        display: `standalone`,
        icon: `./src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
