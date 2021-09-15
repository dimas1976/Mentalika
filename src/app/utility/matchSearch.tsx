import type { Doctor } from '../lib/types';

export function matchSearch(doctor: Doctor, searchValue: string): boolean {
  const concatedString =
    `${doctor.name}${doctor.surename}${doctor.adress}${doctor.city}`.toLowerCase();
  const searchValueLowerCase = searchValue.toLowerCase();
  const regExpObj = new RegExp(`${searchValueLowerCase}*`, 'g');
  const result = concatedString.match(regExpObj);
  return result ? true : false;
}
