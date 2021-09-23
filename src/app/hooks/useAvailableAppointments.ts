import type { Appointment, DoctorDate } from '../lib/types';
import useDoctorById from './useDoctorById';
import useLocalStorage from './useLocalStorage';

export default function useAvailableAppointments(
  doctorId: string
): DoctorDate[] {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    'appointments',
    []
  );

  const [doctor] = useDoctorById(doctorId);

  const filteredAppointmentsByDoctorId = appointments.find(
    (element) => element.doctorId === doctor.id
  );
  if (!filteredAppointmentsByDoctorId) {
    throw new Error('There is no doctor with the ID');
  }

  const freeDates: DoctorDate[] = filteredAppointmentsByDoctorId.availability;

  return freeDates;
}
