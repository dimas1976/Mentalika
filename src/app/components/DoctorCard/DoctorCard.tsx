import React from 'react';
import styles from './DoctorCard.module.css';

type DoctorCardProps = {
  imgPath: string;
  title: string;
  name: string;
  surename: string;
  adress: string;
  plz: number;
  city: string;
  className: string;
};

export default function DoctorCard({
  imgPath,
  title,
  name,
  surename,
  adress,
  plz,
  city,
  className,
}: DoctorCardProps): JSX.Element {
  return (
    <article className={`${className} ${styles.doctorCard}`}>
      <div className={styles.imageCropper}>
        <img src={imgPath} alt="profile" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          {title} {name} {surename}
        </h2>
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
