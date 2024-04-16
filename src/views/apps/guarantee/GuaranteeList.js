import { useAuth } from "../../../axios/hooks/useAuth";
import BankerGuaranteeList from "./BankerGuaranteeList";

const GuaranteeList = () => {
    const { role } = useAuth()
    if (role === 'CLIENT') {
        // return <ClientApplicationList />
    }
    else if (role === 'BANKER') {
        return <BankerGuaranteeList />
    }

};

export default GuaranteeList;
