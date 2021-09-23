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
  doctorId: string;
  availability: DoctorDate[];
};

export type DoctorDate = {
  date: string;
  isBooked: boolean;
};

export type UserData = {
  doctorId: string;
  appointments: string[];
};
