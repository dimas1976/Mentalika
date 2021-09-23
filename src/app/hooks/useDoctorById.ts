import { useState } from 'react';
import type { Doctor } from '../lib/types';
import useLocalStorage from './useLocalStorage';

export default function useDoctorById(id: string): [Doctor] {
  const [doctors] = useLocalStorage<Doctor[]>('doctors', []);
  const [doctor] = useState<Doctor>(() => {
    const doctor = doctors.find((el) => el.id == id);
    if (!doctor) {
      throw new Error('There is no doctor with this ID');
    }
    return doctor;
  });

  return [doctor];
}
