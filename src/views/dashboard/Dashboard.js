import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import AdminDashboard from "./AdminDashboard";


const Dashboard = () => {
    const { role } = useAuth()
    if (role === 'ADMIN') {
        return <AdminDashboard />
    }
    else {
        return <Navigate to="/auth/404" />
    }

};

export default Dashboard;
