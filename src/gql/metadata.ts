import { graphql, useStaticQuery } from 'gatsby';

// import { SiteSiteMetadata } from '@/graphqlTypes';

export const metadataQuery = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          enlgishDescription
          image
          siteUrl
          spanishDescription
          title
          twitter
        }
      }
    }
  `);
  return site.siteMetadata;
};
