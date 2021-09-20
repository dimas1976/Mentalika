import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Searchbar from '../../components/Searchbar/Searchbar';
import Navigation from '../../components/navigation/Navigation';
import styles from './Home.module.css';
import type { Doctor } from '../../lib/types';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import { matchSearch } from '../../utility/matchSearch';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function Home(): JSX.Element {
  const query = new URLSearchParams(useLocation().search);
  const searchQuery = query.get('q');
  const [searchValue, setSearchValue] = useState(searchQuery || '');
  const history = useHistory();
  const [doctors] = useLocalStorage<Doctor[]>('doctors', []);

  function searchForDoctors() {
    history.replace(`?q=${searchValue}`);
  }

  return (
    <div className={styles.page}>
      <Header />
      <Searchbar
        className={styles.page__searchbar}
        value={searchValue}
        placeholder={'Suche nach Name oder Stadt'}
        onValueChange={(value) => setSearchValue(value)}
        onSubmit={searchForDoctors}
      />
      <section className={styles.page__section}>
        {searchValue &&
          doctors
            .filter((doctor) => matchSearch(doctor, searchValue))
            .map((doctor) => {
              return (
                <DoctorCard
                  className={styles.card}
                  id={doctor.id}
                  key={doctor.id}
                  imgPath={doctor.image}
                  title={doctor.title}
                  name={doctor.name}
                  surename={doctor.surename}
                  adress={doctor.adress}
                  plz={doctor.plz}
                  city={doctor.city}
                  isShowButton={true}
                />
              );
            })}
      </section>
      <Navigation className={styles.page__navigation} activeLink="home" />
    </div>
  );
}
