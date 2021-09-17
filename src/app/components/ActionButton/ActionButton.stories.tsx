import React from 'react';
import ActionButton from './ActionButton';

export default {
  title: 'Component/ActionButton',
  component: ActionButton,
};

export const BookButton = (): JSX.Element => (
  <ActionButton onClickHandle={() => console.log('huhu')}>buchen</ActionButton>
);
