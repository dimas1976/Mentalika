const Days = [
  'Sonntag',
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
];

const dateString = '2021-10-22T12:42:00Z';
const date = new Date(dateString);

function getWeekDay(date: Date): string {
  const weekDay = Days[date.getDay()];
  const weekDayShort = weekDay.slice(0, 2);
  return weekDayShort;
}

function formatMinutesOutput(date: Date): string {
  const minutes = date.getMinutes();
  return minutes == 0 ? '00' : minutes.toString();
}

export function formatAppointment(): string {
  const appointmentDate = `${getWeekDay(date)}.${date.getDate()}.${
    date.getMonth() + 1
  }  ${date.getHours()}:${formatMinutesOutput(date)} Uhr`;

  return appointmentDate;
}
