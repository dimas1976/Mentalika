import React from 'react';
import styles from './DoctorCard.module.css';
import ActionButton from '../ActionButton/ActionButton';

type DoctorCardProps = {
  imgPath: string;
  title: string;
  name: string;
  surename: string;
  adress: string;
  plz: number;
  city: string;
  isShowButton: boolean;
};

export default function DoctorCard({
  imgPath,
  title,
  name,
  surename,
  adress,
  plz,
  city,
  isShowButton,
}: DoctorCardProps): JSX.Element {
  return (
    <article className={styles.doctorCard}>
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
      {isShowButton && <ActionButton children="zum Profil" />}
    </article>
  );
}
