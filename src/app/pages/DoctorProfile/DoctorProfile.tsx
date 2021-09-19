import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import ActionButton from '../../components/ActionButton/ActionButton';
import AppointmentItem from '../../components/AppointmentItem/AppointmentItem';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import Header from '../../components/Header/Header';
import Navigation from '../../components/navigation/Navigation';
import type { Appointment, Doctor, DoctorDate } from '../../lib/types';
import styles from './DoctorProfile.module.css';

export default function DoctorProfile(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [dates, setDates] = useState<DoctorDate[]>([]);
  const history = useHistory();
  const location = useLocation();

  const doctor = getDoctor();

  useEffect(() => {
    getAppointments();
  }, []);

  function getAppointments() {
    const item = localStorage.getItem('appointments');
    if (!item) {
      throw new Error('Database Error');
    }
    const appointnemts: Appointment[] = item ? JSON.parse(item) : [];

    const filteredAppointmentsByDoctorId = appointnemts.find(
      (element) => element.doctorId === doctor.id
    );
    const freeDates = filteredAppointmentsByDoctorId?.availability;
    const notBookedDates = freeDates?.filter((element) => !element.isBooked);
    if (notBookedDates) setDates(notBookedDates);
  }

  function getDoctor(): Doctor {
    const item = localStorage.getItem('doctors');
    const doctors: Doctor[] = item ? JSON.parse(item) : [];
    if (doctors.length === 0) {
      throw new Error('Database Error');
    }
    const doctor = doctors.find((el) => {
      return el.id == id;
    });

    if (!doctor) {
      throw new Error('There is no doctor');
    }
    return doctor;
  }

  function goBack() {
    // history.replace(location.pathname, { fromProfilePage: true });
    // history.push(location.search);
    const refetchEvent = new CustomEvent('refetch');
    document.dispatchEvent(refetchEvent);
    history.goBack();
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.page__main}>
        {doctor && (
          <DoctorCard
            id={doctor.id}
            imgPath={doctor.image}
            title={doctor.title}
            name={doctor.name}
            surename={doctor.surename}
            adress={doctor.adress}
            plz={doctor.plz}
            city={doctor.city}
            isShowButton={false}
          />
        )}
        <article className={`${styles.about} ${styles.article}`}>
          <h2 className={styles.heading}>Über mich</h2>
          <p className={styles.bio}>{doctor?.bio}</p>
        </article>
        <article className={`${styles.availableCard} ${styles.article}`}>
          <h2 className={styles.heading}>Verfügbare Termine</h2>
          <div className={styles.available__dates}>
            {dates &&
              dates.map((element) => {
                return (
                  <AppointmentItem key={element.date} value={element.date} />
                );
              })}
          </div>
        </article>
        <ActionButton children="zurück" onClickHandle={goBack} />
      </main>
      <Navigation className={styles.page__navigation} />
    </div>
  );
}
