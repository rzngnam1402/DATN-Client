import { useAuth } from "../../../axios/hooks/useAuth";
import BankerApplicationList from "./BankerApplicationList";
import ClientApplicationList from "./ClientApplicationList";

const ApplicationList = () => {
    const { role } = useAuth()
    if (role === 'CLIENT') {
        return <ClientApplicationList />
    }
    else if (role === 'BANKER') {
        return <BankerApplicationList />
    }

};

export default ApplicationList;
