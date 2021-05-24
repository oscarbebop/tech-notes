module.exports = {
  siteMetadata: {
    title: "tech-notes",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "fp3dnn6v",
        dataset: "production",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
};
