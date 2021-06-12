import React, { useContext } from 'react';

import MainContext from '../../context/context';
import { IContext, Theme } from '../../context/types';

import { homeQuery } from '../../gql/home';
import { SanityPages } from '../../graphqlTypes';

import BaseBlockContent from '@sanity/block-content-to-react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { CodeBlock, ParagraphPlaceholder, Title } from '../../components/ui';

export default function HomeTemplate(): JSX.Element {
  const data: SanityPages = homeQuery();

  const { code, id, title, _rawContent } = data;

  const { language } = useContext<IContext>(MainContext);

  console.log('================');
  console.log(data);
  console.log('================');

  return (
    <>
      {!data ? (
        <Layout>
          <ParagraphPlaceholder />
        </Layout>
      ) : (
        <>
          <SEO title="Home" />
          <Layout>
            <Title>{title}</Title>
            <BaseBlockContent key={id} blocks={_rawContent[language]} />
            <CodeBlock code={code[0].code} technology="javascript" />
          </Layout>
        </>
      )}
    </>
  );
}
