import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AppointmentItem from '../../components/AppointmentItem/AppointmentItem';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import Header from '../../components/Header/Header';
import Navigation from '../../components/navigation/Navigation';
import type { Appointment, Doctor, DoctorDate } from '../../lib/types';
import styles from './DoctorProfile.module.css';

export default function DoctorProfile(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [dates, setDates] = useState<DoctorDate[]>([]);

  const doctor = getDoctor();
  const myDates: DoctorDate[] = [
    { date: '2021-10-22T12:00:00Z', isBooked: true },
    { date: '2021-10-23T12:00:00Z', isBooked: false },
    { date: '2021-10-24T9:45:00Z', isBooked: false },
  ];
  useEffect(() => {
    setDates(myDates);
  }, []);

  //   useEffect(() => {
  //     getAppointments;
  //   }, [id]);

  //   getAppointments();

  //   function getAppointments() {
  //     const item = localStorage.getItem('appointments');
  //     const appointnemts: Appointment[] = item ? JSON.parse(item) : [];
  //     if (appointnemts.length === 0) {
  //       throw new Error('Database Error');
  //     }

  //     const filteredAppointmentsByDoctorId = appointnemts.find(
  //       (element) => element.docId === doctor.id
  //     );
  //     const freeDates = filteredAppointmentsByDoctorId?.available;
  //     const notBookedDates = freeDates?.filter((element) => !element.isBooked);
  //     if (notBookedDates) setDates(notBookedDates);
  //   }

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

  return (
    <div className={styles.page}>
      <Header className={styles.page__header} />
      <section>
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
          <p className={styles.adress}>{doctor?.bio}</p>
        </article>
        <article className={`${styles.available} ${styles.article}`}>
          <h2 className={styles.heading}>Verfügbare Termine</h2>
          <div className={styles.dates}>
            {dates &&
              dates.map((element) => {
                return <AppointmentItem value={element.date} />;
              })}
          </div>
        </article>
      </section>
      <Navigation className={styles.page__navigation} />
    </div>
  );
}
