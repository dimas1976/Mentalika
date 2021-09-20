import React from 'react';
import styles from './ActionLink.module.css';
import { Link } from 'react-router-dom';

type ActionLinkProp = {
  path: string;
  children: React.ReactNode;
  className?: string;
};

export default function ActionLink({
  path,
  children,
  className,
}: ActionLinkProp): JSX.Element {
  return (
    <div className={`${className ? className : ''} ${styles.link}`}>
      <Link to={path}> {children}</Link>
    </div>
  );
}
