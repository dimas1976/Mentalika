import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export const AppHeader = (): JSX.Element => <Header />;
