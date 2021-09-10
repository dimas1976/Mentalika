import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Component/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mentalika',
      values: [{ name: 'mentalika', value: '#DBF4FF' }],
    },
  },
};

export const AppNavigation = (): JSX.Element => (
  <Navigation activeLink="home" />
);
