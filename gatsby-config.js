module.exports = {
  siteMetadata: {
    siteUrl: "https://www.john-kowalsky-photo.netlify.app",
    title: "John Kowalsky Photo",
    description: "John Kowalsky's personal website.",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/logo.png",
      },
    },
  ],
};
