import React, { useContext } from 'react';

import MainContext from '../../../../context/context';
import { CategoryFilter, IContext } from '../../../../context/types';

// import { SanityTechnologies } from '@/graphqlTypes';

import { Select } from './Selector.styles';

interface IProps {
  // technologies: SanityTechnologies[];
  technologies: any[];
}

export default function Selector(props: IProps): JSX.Element {
  const { technologies } = props;

  const { category, changeCategory } = useContext<IContext>(MainContext);

  return (
    <Select
      defaultValue={category}
      onChange={element => changeCategory(element.target.value)}
    >
      {/* {technologies.reverse().map((technology: SanityTechnologies) => ( */}
      <option value={CategoryFilter.all}>all</option>
      {technologies.reverse().map(technology => (
        <option key={technology.id} value={technology.technologie}>
          {technology.technologie}
        </option>
      ))}
    </Select>
  );
}
