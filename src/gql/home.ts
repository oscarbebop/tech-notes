import { graphql, useStaticQuery } from 'gatsby';

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
