import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ActionButton from '../../components/ActionButton/ActionButton';
import AppointmentItem from '../../components/AppointmentItem/AppointmentItem';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import Header from '../../components/Header/Header';
import Navigation from '../../components/navigation/Navigation';
import useDoctorById from '../../hooks/useDoctorById';
import useLocalStorage from '../../hooks/useLocalStorage';
import type { Appointment, DoctorDate, UserData } from '../../lib/types';
import styles from './DoctorProfile.module.css';

export default function DoctorProfile(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [dates, setDates] = useState<DoctorDate[]>([]);
  const history = useHistory();
  const [doctor] = useDoctorById(id);
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    'appointments',
    []
  );

  const [userData, setUserData] = useLocalStorage<UserData[]>('userData', []);
  const userDataObj: UserData[] = [
    {
      doctorId: '',
      appointments: [],
    },
  ];

  useEffect(() => {
    if (!userDataObj) setUserData(userDataObj);
    getAppointments();
  }, []);

  function getAppointments() {
    const filteredAppointmentsByDoctorId = appointments.find(
      (element) => element.doctorId === doctor.id
    );
    const freeDates = filteredAppointmentsByDoctorId?.availability;
    const notBookedDates = freeDates?.filter((element) => !element.isBooked);
    if (notBookedDates) setDates(notBookedDates);
  }

  function goBack() {
    history.goBack();
  }

  function bookAppointment(date: string) {
    setDateBooked(date);
    saveAppointmentForUser(date);
  }

  function setDateBooked(date: string) {
    const bookedDate = dates.find((element) => element.date === date);
    if (!bookedDate) {
      throw new Error('Error');
    }
    bookedDate.isBooked = true;

    const filteredAppointmentsByDoctorId = appointments.find(
      (element) => element.doctorId === doctor.id
    );
    if (!filteredAppointmentsByDoctorId) {
      throw new Error('');
    }
    filteredAppointmentsByDoctorId.availability = [...dates];
    setAppointments(appointments);
  }

  function saveAppointmentForUser(date: string) {
    const foundElement = userData.find((element) => element.doctorId === id);
    if (!foundElement) {
      const newAppointment = [
        ...userData,
        { doctorId: id, appointments: [date] },
      ];
      setUserData(newAppointment);
    } else {
      foundElement.appointments = [...foundElement.appointments, date];
      setUserData(userData);
    }
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
                  <AppointmentItem
                    key={element.date}
                    value={element.date}
                    clickHandle={() => bookAppointment(element.date)}
                  />
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
