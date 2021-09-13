import React from 'react';
import Header from '../../components/Header/Header';
import Searchbar from '../../components/Searchbar/Searchbar';
import Navigation from '../../components/navigation/Navigation';
import styles from './Home.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.page}>
      <Header className={styles.page__header} />
      <Searchbar
        className={styles.page__searchbar}
        value=""
        placeholder={'Suche nach Name oder Stadt'}
        onValueChange={(value) => console.log(value)}
      />
      <section className={styles.page__section}></section>
      <Navigation className={styles.page__navigation} activeLink="home" />
    </div>
  );
}
