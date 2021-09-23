import { useState } from 'react';
import type { Doctor } from '../lib/types';
import useLocalStorage from './useLocalStorage';

export default function useDoctorById(id: string): [Doctor] {
  const [doctors] = useLocalStorage<Doctor[]>('doctors', []);
  const [doctor] = useState<Doctor>(() => {
    const doctor = doctors.find((el) => el.id == id);
    if (!doctor) {
      throw new Error('');
    }
    return doctor;
  });

  return [doctor];
}
