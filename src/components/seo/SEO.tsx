import React, { useContext } from 'react';

import MainContext from '../../context/context';
import { IContext, Lang } from '../../context/types';

import { Helmet } from 'react-helmet';

import { metadataQuery } from '../../gql/metadata';
// import { SiteSiteMetadata } from '@/graphqlTypes';

interface IProps {
  title: string;
  description?: string | null;
}

export default function SEO(props: IProps): JSX.Element {
  const { description, title } = props;

  const { language } = useContext<IContext>(MainContext);

  // const data: SiteSiteMetadata = metadataQuery();
  const data = metadataQuery();

  const {
    enlgishDescription,
    image,
    spanishDescription,
    title: websiteTitle
  } = data;

  const websiteDescription =
    language === Lang.EN ? enlgishDescription : spanishDescription;

  return (
    <Helmet titleTemplate={`%s | ${websiteTitle}`}>
      <html lang={language} />
      <title>{title}</title>
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      {/* Meta Tags */}
      <meta name="description" content={websiteDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      {/* Open Graph */}
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:site_name" content={websiteTitle} key="ogsitename" />
      <meta
        property="og:description"
        content={description || websiteDescription}
        key="ogdesc"
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  description: null
};
