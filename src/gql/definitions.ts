import { graphql, useStaticQuery } from 'gatsby';

// import { SanityDefinitionsConnection } from '@/graphqlTypes';

export const definitionsQuery = () => {
  const { allSanityDefinitions } = useStaticQuery(graphql`
    query {
      allSanityDefinitions {
        totalCount
        nodes {
          id
          title
          technology {
            technologie
          }
        }
      }
    }
  `);
  return allSanityDefinitions;
};
