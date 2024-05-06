import { useAuth } from "../../../hooks/useAuth";
import ClientApplicationListing from './ClientApplicationList'
import BankerApplicationList from './BankerApplicationList'


const ApplicationList = () => {
    const { role } = useAuth()
    if (role === 'CLIENT') {
        return <ClientApplicationListing />
    }
    else if (role === 'BANKER') {
        return <BankerApplicationList />
    }

};

export default ApplicationList;
