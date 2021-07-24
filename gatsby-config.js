module.exports = {
  siteMetadata: {
    siteUrl: "https://john-kowalsky-photo.netlify.app",
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
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "ABOUTME",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "aboutme",
        // Url to query from
        url: "https://api-eu-central-1.graphcms.com/v2/ckrh3c7590f0z01xse80cap50/master",
      },
    },
  ],
};
