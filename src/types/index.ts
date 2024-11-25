export interface Company {
  companyName: string;
  registrationNumber: string;
  sector: 'Hospital' | 'Factory';
  email: string;
  password: string;
}

export interface Employee {
  id: string;
  name: string;
  address: string;
  guardianName: string;
  gender: 'Male' | 'Female';
  dob: string;
  designation: string;
  joiningDate: string;
  photo: string;
  wages: {
    basic: number;
    da: number;
  };
  status: 'Active' | 'Relieved';
}

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: Company | null;
}