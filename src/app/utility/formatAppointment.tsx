const Days = [
  'Sonntag',
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
];

function getWeekDay(date: Date): string {
  const weekDay = Days[date.getDay()];
  const weekDayShort = weekDay.slice(0, 2);
  return weekDayShort;
}

function formatMinutesOutput(date: Date): string {
  const minutes = date.getMinutes();
  return minutes == 0 ? '00' : minutes.toString();
}

export function formatAppointment(value: string): string {
  const date = new Date(value);
  const appointmentDate = `${getWeekDay(date)}.${date.getDate()}.${
    date.getMonth() + 1
  }  ${date.getHours()}:${formatMinutesOutput(date)} Uhr`;

  return appointmentDate;
}
