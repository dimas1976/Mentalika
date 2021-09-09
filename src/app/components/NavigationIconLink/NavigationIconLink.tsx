import React from 'react';
import BookmarkIcon from '../assets/BookmarkIcon';
import HomeIcon from '../assets/HomeIcon';
import NotificationIcon from '../assets/NotificationIcon';

export type IconLinkProps = {
  iconType: 'home' | 'bookmark' | 'notification';
  isActive: boolean;
};

export default function NavigationIconLink({
  iconType,
  isActive,
}: IconLinkProps): JSX.Element {
  const active = {
    fill: 'var(--color-accent)',
  };

  const inactive = {
    fill: 'var(--text-color-primary)',
  };

  const iconStateMap = {
    home: <HomeIcon {...(isActive ? active : inactive)} />,
    bookmark: <BookmarkIcon {...(isActive ? active : inactive)} />,
    notification: <NotificationIcon {...(isActive ? active : inactive)} />,
  };
  return iconStateMap[iconType];
}
