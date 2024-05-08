import { useAuth } from "../../../hooks/useAuth";
import BankerIndemnityList from "./BankerIndemnityList";
import ClientIndemnityList from "./ClientIndemnityList";

const IndemnityList = () => {
    const { role } = useAuth()
    if (role === 'CLIENT') {
        return <ClientIndemnityList />
    }
    else if (role === 'BANKER') {
        return <BankerIndemnityList />
    }

};

export default IndemnityList;
