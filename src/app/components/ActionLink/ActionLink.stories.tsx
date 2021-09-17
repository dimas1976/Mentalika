import React from 'react';
import ActionLink from './ActionLink';
import ActionButton from './ActionLink';

export default {
  title: 'Component/ActionLink',
  component: ActionLink,
};

export const ProfileActionLink = (): JSX.Element => (
  <ActionButton path="">zum Profil</ActionButton>
);
