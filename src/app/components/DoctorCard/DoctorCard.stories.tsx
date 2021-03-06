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
    id="1"
    imgPath={imageFile}
    title="Dipl.-Psych."
    name="Sabine"
    surename="Sabine Wery von Limont"
    adress="Max-Brauer-Alee 52,"
    plz={22765}
    city="Hamburg"
    isShowButton={false}
  />
);

export const CardWithAction = (): JSX.Element => (
  <DoctorCard
    id="2"
    imgPath={imageFile}
    title="Dipl.-Psych."
    name="Sabine"
    surename="Sabine Wery von Limont"
    adress="Max-Brauer-Alee 52,"
    plz={22765}
    city="Hamburg"
    isShowButton={true}
  />
);
