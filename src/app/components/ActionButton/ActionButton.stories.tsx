import React from 'react';
import ActionButton from './ActionButton';
import Button from './ActionButton';

export default {
  title: 'Component/ActionButton',
  component: ActionButton,
};

export const BookButton = (): JSX.Element => <Button>buchen</Button>;
export const BackButton = (): JSX.Element => <Button>zurück</Button>;
export const ProfileButton = (): JSX.Element => <Button>zum Profil</Button>;
