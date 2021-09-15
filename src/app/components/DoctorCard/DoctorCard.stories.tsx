import React from 'react';
import DoctorCard from './DoctorCard';
import imageFile from '../assets/images/sabine.jpg';

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
    isShowButton={false}
  />
);

export const CardWithAction = (): JSX.Element => (
  <DoctorCard
    imgPath={imageFile}
    heading="Dipl.-Psych. Sabine Wery von Limont"
    adress="Max-Brauer-Alee 52,"
    plz="22765"
    city="Hamburg"
    isShowButton={true}
  />
);
