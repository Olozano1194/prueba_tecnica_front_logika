import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { login as loginApi } from '../api/auth.api';
import { getToken, setToken, removeToken } from '../utils/tokenStorage';
import type { LoginCredentials } from '../types/auth.types';

interface AuthProviderProps {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = getToken();

        if (token) {
            setIsAuthenticated(true);
        }

        setLoading(false);
    }, []);

    const login = async (credentials: LoginCredentials): Promise<void> => {
        const { token } = await loginApi(credentials);
        setToken(token);
        setIsAuthenticated(true);
    };

    const logout = (): void => {
        removeToken();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider 
            value={{ 
                isAuthenticated, 
                loading, 
                login, 
                logout 
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};