import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../axios/hooks/useAuth";

export const ProtectedRoute = () => {
    const { token } = useAuth();
    if (!token) {
        // user is not authenticated
        return <Navigate to="/landingpage" />;
    }
    return <Outlet />;
};
