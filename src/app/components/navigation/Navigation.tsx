import React from 'react';
import { Link } from 'react-router-dom';
import NavigationIconLink from '../NavigationIconLink/NavigationIconLink';
import styles from './Navigation.module.css';

type NavigationProps = {
  activeLink?: 'home' | 'bookmark' | 'notification';
  className?: string;
};

export default function Navigation({
  activeLink,
  className,
}: NavigationProps): JSX.Element {
  return (
    <nav className={`${className} ${styles.navigation}`}>
      <Link to="/dashboard">
        <NavigationIconLink
          className={styles.navigationItem}
          iconType="home"
          isActive={activeLink === 'home'}
        />
      </Link>
      <Link to="#">
        <NavigationIconLink
          className={styles.navigationItem}
          iconType="bookmark"
          isActive={activeLink === 'bookmark'}
        />
      </Link>
      <Link to="#">
        <NavigationIconLink
          className={styles.navigationItem}
          iconType="notification"
          isActive={activeLink === 'notification'}
        />
      </Link>
    </nav>
  );
}
