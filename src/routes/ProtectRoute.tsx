import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../utils/tokenStorage";

const ProtectRoute = () => {
    //const { token } = useAuth(); //Obtenemos el token del contexto de autenticación
    const isAuthenticated = !!getToken(); //Verificamos si el token existe

    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectRoute;