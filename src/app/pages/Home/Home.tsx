import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Searchbar from '../../components/Searchbar/Searchbar';
import Navigation from '../../components/navigation/Navigation';
import styles from './Home.module.css';
import type { Doctor } from '../../lib/types';

export default function Home(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  let doctors: Doctor[] = [];
  function getdoctors() {
    const item = localStorage.getItem('doctors');
    doctors = item ? JSON.parse(item) : [];
    console.log(doctors);
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
      <section className={styles.page__section}></section>
      <nav className={styles.page__navigation}>
        <Navigation activeLink="home" />
      </nav>
    </div>
  );
}
