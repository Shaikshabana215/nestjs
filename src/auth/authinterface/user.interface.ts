export enum Role {
  Admin = 'admin',
  Student = 'student',
  Employee = 'employee',
  Examination = 'examination',
  Canteen = 'canteen',
}

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
};

export interface IAuthenticate {
  readonly user: User;
  readonly token: string;
}
