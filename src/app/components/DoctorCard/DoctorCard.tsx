import React from 'react';
import styles from './DoctorCard.module.css';
import ActionButton from '../ActionButton/ActionButton';
import { useHistory } from 'react-router';

type DoctorCardProps = {
  id: string;
  imgPath: string;
  title: string;
  name: string;
  surename: string;
  adress: string;
  plz: number;
  city: string;
  isShowButton: boolean;
  className?: string;
};

export default function DoctorCard({
  id,
  imgPath,
  title,
  name,
  surename,
  adress,
  plz,
  city,
  isShowButton,
  className,
}: DoctorCardProps): JSX.Element {
  const history = useHistory();
  function navigateToProfile() {
    history.push(`/doctor/${id}`);
  }
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
      {isShowButton && (
        <ActionButton
          className={styles.actionButton}
          children="zum Profil"
          onClickHandle={navigateToProfile}
        />
      )}
    </article>
  );
}
