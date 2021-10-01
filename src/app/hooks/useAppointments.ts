import { useEffect } from 'react';
import type { Appointment } from '../lib/types';
import useLocalStorage from './useLocalStorage';

export default function useAppointments(
  key: string
): [Appointment[], (value: Appointment[]) => void] {
  const mockData: Appointment[] = [
    {
      doctorId: '1',
      availability: [
        { date: '2021-10-22T12:00:00', isBooked: false },
        { date: '2021-10-23T12:00:00', isBooked: false },
        { date: '2021-10-24T09:45:00', isBooked: false },
      ],
    },
    {
      doctorId: '2',
      availability: [
        { date: '2021-11-02T16:10:00', isBooked: false },
        { date: '2021-12-13T15:40:00', isBooked: false },
        { date: '2021-12-19T09:45:00', isBooked: false },
      ],
    },
    {
      doctorId: '3',
      availability: [
        { date: '2022-01-10T12:00:00', isBooked: false },
        { date: '2022-01-13T12:00:00', isBooked: false },
        { date: '2022-01-15T09:45:00', isBooked: false },
      ],
    },
  ];

  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    key,
    []
  );
  useEffect(() => {
    setAppointments(mockData);
  }, []);

  return [appointments, setAppointments];
}
