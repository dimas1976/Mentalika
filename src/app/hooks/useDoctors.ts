import { useEffect } from 'react';
import type { Doctor } from '../lib/types';
import useLocalStorage from './useLocalStorage';

export default function useDoctors(key: string): Doctor[] {
  const mockData = [
    {
      id: '1',
      image: 'sabine.jpg',
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
      image: 'marc.jpg',
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
      image: 'wilhelm.jpg',
      title: 'Facharzt für Psychiatrie',
      name: 'Wilhelm-Georg',
      surename: 'Brokopf',
      bio: '',
      adress: 'Breite Str. 141-143',
      plz: 22765,
      city: 'Hamburg',
    },
  ];
  const [doctors, setDoctors] = useLocalStorage<Doctor[]>(key, []);

  useEffect(() => {
    setDoctors(mockData);
  }, []);

  return doctors;
}
