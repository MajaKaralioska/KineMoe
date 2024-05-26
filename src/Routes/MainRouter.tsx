
import { useEffect } from "react";
import { AutorisedRoutes } from "./Autorised-routes/AutorisedRoutes";
import { NonAutorisedRoutes } from "./Non-autorised-routes/NonAutorisedRoutes";
import { useAuth } from "../store/autxContext/authContext";

export const MainRouter = () => {
    const { isAuthenticated, login } = useAuth();

    useEffect(() => {
        const user = localStorage.getItem('loggedUser');
        if (user) {
            login(user); // Update context state if user is found in localStorage
        }
    }, [login]);
  
    return (
        <>
            {isAuthenticated ? <AutorisedRoutes /> : <NonAutorisedRoutes />}
        </>
    );
}
