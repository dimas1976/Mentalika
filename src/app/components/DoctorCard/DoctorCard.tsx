import React from 'react';
import styles from './DoctorCard.module.css';

type DoctorCardProps = {
  imgPath: string;
  heading: string;
  adress: string;
  plz: string;
  city: string;
};

export default function DoctorCard({
  imgPath,
  heading,
  adress,
  plz,
  city,
}: DoctorCardProps): JSX.Element {
  return (
    <article className={styles.doctorCard}>
      <div className={styles.imageCropper}>
        <img src={imgPath} alt="profile" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.adress}>
          <span>{adress}</span>
          <br />
          <span>
            {plz} {city}
          </span>
        </p>
      </div>
    </article>
  );
}
