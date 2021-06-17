import React, { useContext } from 'react';

import MainContext from '../../context/context';
import { IContext, Lang } from '../../context/types';

import { aboutQuery } from '../../gql/about';
import { SanityPages } from '../../graphqlTypes';

import BaseBlockContent from '@sanity/block-content-to-react';

import Layout from '../../components/layout';
import LayoutPlaceholder from '../../components/layout-placeholder';
import SEO from '../../components/seo';
import { Title } from '../../components/ui';

export default function AboutTemplate(): JSX.Element {
  const data: SanityPages = aboutQuery();

  const { language } = useContext<IContext>(MainContext);

  const { _rawContent, content, id } = data;

  const aboutTitle = language === Lang.EN ? 'About' : 'Acerca';

  return (
    <>
      {!data && <LayoutPlaceholder />}
      {data && (
        <>
          <SEO
            description={content[language][0].children[0].text}
            title={aboutTitle}
          />
          <Layout>
            <Title>{aboutTitle}</Title>
            <BaseBlockContent key={id} blocks={_rawContent[language]} />
          </Layout>
        </>
      )}
    </>
  );
}
