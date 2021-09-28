import React, { useEffect, useState } from 'react';
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
import { useDebounce } from 'use-debounce';

export default function Home(): JSX.Element {
  const mockData = [
    {
      id: '1',
      image: './src/app/components/assets/images/sabine.jpg',
      title: 'Dipl.-Psych.',
      name: 'Sabine',
      surename: 'Wery von Limont',
      bio: 'Hallo, mein Name ist Wery von Limont. Ich bin Diplom-Psychologin, Systemische Therapeutin und Heilpraktikerin für Psychotherapie. In meiner Privatpraxis arbeite ich mit klinischer Hypnose und lösungsorientierten Techniken',
      adress: 'Max-Brauer-Alee 52',
      plz: 22765,
      city: 'Hamburg',
    },
    {
      id: '2',
      image: './src/app/components/assets/images/marc.jpg',
      title: 'Dipl.-Psych.',
      name: 'Marc',
      surename: 'Almond',
      bio: 'Gerne unterstütze ich Sie dabei, den passenden Ansatz für Ihr persönliches Anliegen zu finden. Dabei orientiere ich mich an den neuesten wissenschaftlichen Erkenntnissen der Psychotherapieforschung. Ich arbeite beziehungsorientiert und emotionsfokussiert und integriere die modernen und bewährten Verfahrensweisen der dritten Welle der Verhaltenstherapie, wie beispielsweise achtsamkeitsbasierte Ansätze.',
      adress: 'Kastanienalee 18',
      plz: 10715,
      city: 'Berlin',
    },
    {
      id: '3',
      image: './src/app/components/assets/images/wilhelm.jpg',
      title: 'Facharzt für Psychiatrie',
      name: 'Wilhelm-Georg',
      surename: 'Brokopf',
      bio: '',
      adress: 'Breite Str. 141-143',
      plz: 22765,
      city: 'Hamburg',
    },
  ];
  const query = new URLSearchParams(useLocation().search);
  const searchQuery = query.get('q');
  const [searchValue, setSearchValue] = useState(searchQuery || '');
  const history = useHistory();
  const [doctors, setDoctors] = useLocalStorage<Doctor[]>('doctors', []);
  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  useEffect(() => {
    if (searchValue === '') {
      setDoctors(mockData);
      history.replace(``);
    } else {
      history.replace(`?q=${debouncedSearchValue}`);
    }
  }, [debouncedSearchValue]);

  return (
    <div className={styles.page}>
      <Header />
      <Searchbar
        className={styles.page__searchbar}
        value={searchValue}
        placeholder={'Suche nach Name oder Stadt'}
        onValueChange={(value) => {
          setSearchValue(value);
        }}
      />
      <section className={styles.page__section}>
        {debouncedSearchValue &&
          doctors
            .filter((doctor) =>
              matchSearch(doctor, debouncedSearchValue.toString())
            )
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
