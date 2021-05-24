import { graphql, useStaticQuery } from 'gatsby';

// import { SanityLanguages } from '@/graphqlTypes';
// SanityLanguages[]

export const languagesQuery = () => {
  const { allSanityLanguages } = useStaticQuery(graphql`
    query {
      allSanityLanguages {
        nodes {
          id
          language
        }
      }
    }
  `);
  return allSanityLanguages.nodes;
};
