export type Doctor = {
  id: string;
  image: string;
  title: string;
  name: string;
  surename: string;
  bio: string;
  adress: string;
  plz: number;
  city: string;
};

export type Appointment = {
  docId: string;
  available: [DoctorDate];
};

export type DoctorDate = {
  date: string;
  isBooked: boolean;
};
