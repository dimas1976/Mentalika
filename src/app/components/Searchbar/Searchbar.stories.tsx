import React from 'react';
import Searchbar from './Searchbar';

export default {
  title: 'Component/Searchbar',
  component: Searchbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const AppSearchbar = (): JSX.Element => (
  <Searchbar
    placeholder="Suche nach Name oder Stadt"
    value=""
    onValueChange={() => console.log()}
    onSubmit={() => console.log('huhu')}
  />
);
