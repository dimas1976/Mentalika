import React from 'react';
import type { ReactNode } from 'react';
import styles from './DoctorCard.module.css';

type DoctorCardProps = {
  imgPath: string;
  heading: string;
  adress: string;
  plz: string;
  city: string;
  children?: ReactNode;
};

export default function DoctorCard({
  imgPath,
  heading,
  adress,
  plz,
  city,
  children,
}: DoctorCardProps): JSX.Element {
  return (
    <article className={styles.doctorCard}>
      <div className={styles.imageCropper}>
        <img src={imgPath} alt="profile" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={`${!children ? styles['adress--pb'] : ''}`}>
          <span>{adress}</span>
          <br />
          <span>
            {plz} {city}
          </span>
        </p>
      </div>
      {children}
    </article>
  );
}
