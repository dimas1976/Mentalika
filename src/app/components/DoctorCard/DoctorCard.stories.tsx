import React from 'react';
import DoctorCard from './DoctorCard';
import imageFile from '../assets/images/sabine.jpg';
import ActionButton from '../ActionButton/ActionButton';
import styles from './DoctorCard.module.css';

export default {
  title: 'Component/DoctorCard',
  component: DoctorCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'mentalika',
      values: [{ name: 'mentalika', value: '#DBF4FF' }],
    },
  },
};

export const Card = (): JSX.Element => (
  <DoctorCard
    imgPath={imageFile}
    heading="Dipl.-Psych. Sabine Wery von Limont"
    adress="Max-Brauer-Alee 52,"
    plz="22765"
    city="Hamburg"
  />
);

export const CardWithAction = (): JSX.Element => (
  <DoctorCard
    imgPath={imageFile}
    heading="Dipl.-Psych. Sabine Wery von Limont"
    adress="Max-Brauer-Alee 52,"
    plz="22765"
    city="Hamburg"
    children={
      <>
        <ActionButton className={styles.actionButton} children="zum Profile" />
      </>
    }
  />
);
