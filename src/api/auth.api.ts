import { axiosPublic } from './axios.public';
import type { LoginCredentials, LoginResponse } from '../types/auth.types';


export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await axiosPublic.post<LoginResponse>('/Authentication/Login', credentials);
    return response.data; 
};