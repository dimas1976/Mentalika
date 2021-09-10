import React from 'react';
import Header from '../../components/Header/Header';
import Searchbar from '../../components/Searchbar/Searchbar';
import Navigation from '../../components/navigation/Navigation';
import styles from './Home.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.page}>
      <header className={styles.page__header}>
        <Header />
      </header>
      <div className={styles.page__searchbar}>
        <Searchbar
          value=""
          placeholder={'Suche nach Name oder Stadt'}
          onValueChange={(value) => console.log(value)}
        />
      </div>
      <section className={styles.page__section}></section>
      <nav className={styles.page__navigation}>
        <Navigation activeLink="home" />
      </nav>
    </div>
  );
}
