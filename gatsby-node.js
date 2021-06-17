const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  // Languages
  const languages = await graphql(`
    query {
      allSanityLanguages {
        nodes {
          language
        }
      }
    }
  `);

  // Home
  languages.data.allSanityLanguages.nodes.forEach(element => {
    actions.createPage({
      path: `/${element.language}/`,
      component: path.resolve('src/templates/home-template/HomeTemplate.tsx'),
      context: {
        lang: element.language
      }
    });
  });

  // Home
  languages.data.allSanityLanguages.nodes.forEach((element, index) => {
    let page = index === 0 ? 'about' : 'acerca';

    actions.createPage({
      path: `/${element.language}/${page}`,
      component: path.resolve('src/templates/about-template/AboutTemplate.tsx'),
      context: {
        lang: element.language
      }
    });
  });

  // Definitions
  const definitions = await graphql(`
    query {
      allSanityDefinitions {
        nodes {
          technology {
            technologie
          }
          slug {
            current
          }
        }
      }
    }
  `);

  definitions.data.allSanityDefinitions.nodes.forEach(element => {
    actions.createPage({
      path: `/en/${element.technology[0].technologie}/${element.slug.current}`,
      component: path.resolve(
        'src/templates/definition-template/DefinitionTemplate.tsx'
      ),
      context: {
        technology: element.technology[0].technologie,
        slug: element.slug.current
      }
    });
  });

  definitions.data.allSanityDefinitions.nodes.forEach(element => {
    actions.createPage({
      path: `/es/${element.technology[0].technologie}/${element.slug.current}`,
      component: path.resolve(
        'src/templates/definition-template/DefinitionTemplate.tsx'
      ),
      context: {
        technology: element.technology[0].technologie,
        slug: element.slug.current
      }
    });
  });
};
