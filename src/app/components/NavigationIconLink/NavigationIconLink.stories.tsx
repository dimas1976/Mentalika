import React from 'react';
import NavigationIconLink from './NavigationIconLink';
import type { Story } from '@storybook/react';
import type { IconLinkProps } from './NavigationIconLink';

export default {
  title: 'Component/IconLink',
  component: NavigationIconLink,
  argTypes: {
    iconType: {
      options: ['home', 'bookmark', 'notification'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<IconLinkProps> = (args) => (
  <NavigationIconLink {...args} />
);

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  iconType: 'home',
  isActive: true,
};

export const BookmarkIcon = Template.bind({});
BookmarkIcon.args = {
  iconType: 'bookmark',
  isActive: true,
};

export const NotificationIcon = Template.bind({});
NotificationIcon.args = {
  iconType: 'notification',
  isActive: true,
};
