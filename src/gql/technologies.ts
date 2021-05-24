import { graphql, useStaticQuery } from 'gatsby';

// import { SanityTechnologies } from '@/graphqlTypes';
// SanityTechnologies[]

export const technologieQuery = () => {
  const { allSanityTechnologies } = useStaticQuery(graphql`
    query {
      allSanityTechnologies {
        nodes {
          id
          technologie
        }
      }
    }
  `);
  return allSanityTechnologies.nodes;
};
