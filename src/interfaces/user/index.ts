export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IUserUpdate {
  id: string;
  name?: string;
  email?: string;
  contact?: string;
  password: string;
}
