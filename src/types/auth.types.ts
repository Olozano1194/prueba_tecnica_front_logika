
export interface LoginCredentials {
    username: string;    
    password: string;
};

export type LoginResponse = string;

export interface CreateActionData {
  name: string;
  description: string;
  // icon: File;
  color: string;
//   status: string;
}