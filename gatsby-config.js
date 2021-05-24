const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'tech notes',
    siteUrl: 'https://tech-notes-app.netlify.app/',
    enlgishDescription:
      'tech notes is a page of references and simple definitions about web technologies, programming languages, frameworks and libraries.',
    spanishDescription:
      'tech notes es una página de referencias y definiciones simples sobre tecnologías web, lenguajes de programación, frameworks y librerías. ',
    twitter: '@oscarbebop',
    image: '/promotional.jpg'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production',
        watchMode: true,
        graphqlTag: 'default',
        token: process.env.SANITY_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Inter',
              variants: ['400', '500', '600', '700']
            }
          ]
        }
      }
    }
  ]
};
