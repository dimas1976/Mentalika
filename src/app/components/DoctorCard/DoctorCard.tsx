import React from 'react';
import styles from './DoctorCard.module.css';

export default function DoctorCard(): JSX.Element {
  return (
    <article>
      <div className={styles.imageCropper}>
        <img
          src="./src/app/components/assets/images/sabine.jpg"
          alt="profile"
        />
      </div>
      <div>
        <h2>Dipl.-Psych. Sabine Wery von Limont</h2>
        <p>
          Max-Brauer-Alee 52,
          <br />
          22765 Hamburg
        </p>
      </div>
    </article>
  );
}
