export interface AuthContextType {
    isAuthenticated: boolean;
    userId: string | null;
    login: (userId: string) => void;
    logout: () => void;
}