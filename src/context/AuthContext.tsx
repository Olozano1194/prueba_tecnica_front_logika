import { createContext } from "react";


export interface AuthContextType {
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    login: (credentials: {
        username: string;
        password: string;
    }) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


/*
1) claro primero se tiene que autenticar, para luego acceder al dashboard.
2) token, reportes y usuario.
3) se cargan una sola vez.
4) le voy a pasar el repositorio para que pueda ver que llevo.
5) en el siguiente mensaje le envio código
*/