export interface User {
  email: string;
  name: string;
}
export interface UserContextData {
  user: User | null;
  handleLogIn: (email: string, password: string) => void;
}
