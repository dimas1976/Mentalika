import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/navigation/Navigation';
import useLocalStorage from '../../hooks/useLocalStorage';
import styles from './AppointmentsOverview.module.css';
import type { Doctor, UserData } from '../../lib/types';
import { formatAppointment } from '../../utility/formatAppointment';

export default function AppointmentsOverview(): JSX.Element {
  const [userData] = useLocalStorage<UserData[]>('userData', []);
  const [doctors] = useLocalStorage<Doctor[]>('doctors', []);

  function getDoctorById(id: string): Doctor {
    const foundDoctor = doctors.find((doctor) => id == doctor.id);
    if (!foundDoctor) {
      throw new Error('No doctor with the id');
    }
    return foundDoctor;
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.page__main}>
        <section className={styles.section}>
          <h2>Terminübersicht</h2>
          {userData &&
            userData.map((user) =>
              user.appointments.map((element) => {
                const formattedAppointment = formatAppointment(element);
                const doctor = getDoctorById(user.doctorId);
                return (
                  <p>
                    {`Sie haben am ${formattedAppointment.date}.${formattedAppointment.month} um ${formattedAppointment.hours}:${formattedAppointment.minutes} Uhr einen Termin bei ${doctor.name} ${doctor.surename}`}
                    {/* {element}
                    {getDoctorById(user.doctorId).name} */}
                  </p>
                );
              })
            )}
        </section>
      </main>
      <Navigation className={styles.page__navigation} />
    </div>
  );
}
