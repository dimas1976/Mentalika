import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Searchbar from '../../components/Searchbar/Searchbar';
import Navigation from '../../components/navigation/Navigation';
import styles from './Home.module.css';
import type { Doctor } from '../../lib/types';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import { matchSearch } from '../../utility/matchSearch';
import { useHistory, useParams } from 'react-router';
import { useLocation } from 'react-router-dom';

export default function Home(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const location = useLocation();

  // useEffect(() => {
  //   setDoctors(doctors);
  //   return () => {
  //     document.removeEventListener('refetch');
  //   };
  // }, []);

  // console.log('Location  ', location.state);
  // history.listen((location, action) => {
  //   if (action === 'PUSH') {
  //     console.log(location);
  //     //   history.replace(location.pathname, { fromProfilePage: true });
  //     //   history.push(location.search);
  //   }
  // });

  document.addEventListener('refetch', () => {
    searchForDoctors(location.search);
  });

  function searchForDoctors() {
    history.push(`/search?q=${searchValue}`);

    setErrorMessage('');
    const item = localStorage.getItem('doctors');
    const result: Doctor[] = item ? JSON.parse(item) : [];
    const filteredResult = result.filter((element) =>
      matchSearch(element, searchValue)
    );
    if (filteredResult.length === 0) {
      setErrorMessage('Es gibt keine Ärzte unter diesem Suchbegriff');
    }
    setDoctors(filteredResult);
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
        {errorMessage ? <h3>{errorMessage}</h3> : ''}
        {doctors.map((doctor) => {
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
