export interface User {
  id: string;
  name: string;
  email: string;
  role: 'doctor' | 'nurse' | 'admin' | 'patient';
  avatar?: string;
}

export interface Patient {
  id: string;
  name: string;
  dob: string;
  gender: 'male' | 'female' | 'other';
  bloodGroup: string;
  contact: string;
  email?: string;
  address?: string;
  medicalHistory?: MedicalRecord[];
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  date: string;
  diagnosis: string;
  prescription?: string;
  notes?: string;
  doctorId: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  reason?: string;
  notes?: string;
}

export interface Vital {
  id: string;
  patientId: string;
  recordedAt: string;
  bloodPressure?: { systolic: number; diastolic: number };
  heartRate?: number;
  temperature?: number;
  weight?: number;
  height?: number;
  oxygenSaturation?: number;
}

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
};

export type MainTabParamList = {
  Dashboard: undefined;
  Patients: undefined;
  Appointments: undefined;
  Records: undefined;
  Settings: undefined;
};
