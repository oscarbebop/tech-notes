import { graphql, useStaticQuery } from 'gatsby';

export const aboutQuery = () => {
  const { sanityPages } = useStaticQuery(graphql`
    query {
      sanityPages(slug: { current: { eq: "about" } }) {
        id
        title
        _rawContent
        content {
          en {
            children {
              text
            }
          }
          es {
            children {
              text
            }
          }
        }
      }
    }
  `);
  return sanityPages;
};
