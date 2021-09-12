import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Searchbar from '../../components/Searchbar/Searchbar';
import Navigation from '../../components/navigation/Navigation';
import styles from './Home.module.css';
import type { Doctor } from '../../lib/types';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
export default function Home(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  function getdoctors() {
    const item = localStorage.getItem('doctors');
    let result: Doctor[] = [];
    result = item ? JSON.parse(item) : [];
    if (result.length == 0) {
      throw new Error('no results');
    }
    const filteredResult = result.filter(
      (element) =>
        searchValue === element.surename || searchValue === element.city
    );
    setDoctors(filteredResult);
  }

  return (
    <div className={styles.page}>
      <header className={styles.page__header}>
        <Header />
      </header>
      <div className={styles.page__searchbar}>
        <Searchbar
          value={searchValue}
          placeholder={'Suche nach Name oder Stadt'}
          onValueChange={(value) => setSearchValue(value)}
          handleSubmit={(event) => {
            event.preventDefault();
            getdoctors();
          }}
        />
      </div>
      <section className={styles.page__section}>
        {doctors.map((doctor) => {
          return (
            <DoctorCard
              className={styles.card}
              key={doctor.id}
              imgPath={doctor.image}
              title={doctor.title}
              name={doctor.name}
              surename={doctor.surename}
              adress={doctor.adress}
              plz={doctor.plz}
              city={doctor.city}
            />
          );
        })}
      </section>
      <nav className={styles.page__navigation}>
        <Navigation activeLink="home" />
      </nav>
    </div>
  );
}
