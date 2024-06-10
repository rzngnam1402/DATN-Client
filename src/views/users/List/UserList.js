import { useAuth } from "../../../hooks/useAuth";
import { Navigate } from "react-router";
import AdminUserList from "./AdminUserLIst";


const UserList = () => {
    const { role } = useAuth()
    if (role === 'ADMIN') {
        return <AdminUserList />
    }
    else {
        return <Navigate to="/auth/404" />
    }

};

export default UserList;
