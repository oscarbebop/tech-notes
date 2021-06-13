import React, { useContext } from 'react';

import MainContext from '../../../../context/context';
import { CategoryFilter, IContext, Lang } from '../../../../context/types';

import { SanityTechnologies } from '../../../../graphqlTypes';

import { Select } from './Selector.styles';

interface IProps {
  technologies: SanityTechnologies[];
}

export default function Selector(props: IProps): JSX.Element {
  const { technologies } = props;

  const { category, changeCategory, language } =
    useContext<IContext>(MainContext);

  const allText = language === Lang.EN ? 'all' : 'todos';

  return (
    <Select
      defaultValue={category}
      onChange={element => changeCategory(element.target.value)}
      className="technology_selector_background"
    >
      <option value={CategoryFilter.all}>{allText}</option>
      {technologies.reverse().map((technology: SanityTechnologies) => (
        <option key={technology.id} value={technology.technologie}>
          {technology.technologie}
        </option>
      ))}
    </Select>
  );
}
