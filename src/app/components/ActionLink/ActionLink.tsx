import React from 'react';
import styles from './ActionLink.module.css';
import { Link } from 'react-router-dom';

type ActionLinkProp = {
  path: string;
  children: React.ReactNode;
};

export default function ActionLink({
  path,
  children,
}: ActionLinkProp): JSX.Element {
  return (
    <div className={styles.link}>
      <Link to={path}> {children}</Link>
    </div>
  );
}
