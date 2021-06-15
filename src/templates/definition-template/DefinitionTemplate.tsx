import React, { useContext } from 'react';
import { graphql } from 'gatsby';

import spacetime from 'spacetime';

import MainContext from '../../context/context';
import { IContext } from '../../context/types';

import { Query } from '../../graphqlTypes';

import BaseBlockContent from '@sanity/block-content-to-react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import {
  CodeBlock,
  ParagraphPlaceholder,
  Small,
  Subtitle,
  Title
} from '../../components/ui';

import { DateContainer } from './DefinitionTemplate.styles';

export const definitionQuery = graphql`
  query ($slug: String!, $technology: String!) {
    sanityDefinitions(
      technology: { elemMatch: { technologie: { eq: $technology } } }
      slug: { current: { eq: $slug } }
    ) {
      id
      title
      technology {
        technologie
      }
      _rawContent
      code {
        code
      }
      _updatedAt
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
`;

interface IProps {
  data: Query;
}

export default function DefinitionTemplate(props: IProps): JSX.Element {
  const { data } = props;

  const { language } = useContext<IContext>(MainContext);

  const { _rawContent, _updatedAt, code, content, id, technology, title } =
    data.sanityDefinitions;

  const formattedDate = spacetime(_updatedAt).format(
    '{year}-{date-pad}-{month-pad}'
  );

  console.log('================');
  console.log(!data ? 'mal' : 'bien');
  console.log('================');

  console.log('================');
  console.log(data);
  console.log('================');

  return (
    <>
      {!data && (
        <Layout>
          <ParagraphPlaceholder />
        </Layout>
      )}
      {data && (
        <>
          <SEO
            description={content[language][0].children[0].text}
            title={title}
          />
          <Layout>
            <Title>{title}</Title>
            <Subtitle>{technology[0].technologie}</Subtitle>
            <BaseBlockContent key={id} blocks={_rawContent[language]} />
            <CodeBlock
              code={code[0].code}
              technology={technology[0].technologie}
            />
            <DateContainer>
              <Small>Last updated: {formattedDate}</Small>
            </DateContainer>
          </Layout>
        </>
      )}
    </>
  );
}
