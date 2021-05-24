import { graphql, useStaticQuery } from 'gatsby';

// import { SanityPages } from '@/graphqlTypes';

export const homeQuery = () => {
  const { sanityPages } = useStaticQuery(graphql`
    query {
      sanityPages(slug: { current: { eq: "tech-notes" } }) {
        id
        title
        _rawContent
        code {
          code
        }
      }
    }
  `);
  return sanityPages;
};
