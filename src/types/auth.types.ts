
export interface LoginCredentials {
    username: string;
    password: string;
};

export interface LoginResponse {
    token: string;
};

export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
};

export interface UserType {
    id: string;
    username: string;
}