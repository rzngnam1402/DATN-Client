import { useAuth } from "../../../axios/hooks/useAuth";
import BankerGuaranteeList from "./BankerGuaranteeList";
import ClientGuaranteeList from "./ClientGuaranteeList";

const GuaranteeList = () => {
    const { role } = useAuth()
    if (role === 'CLIENT') {
        return <ClientGuaranteeList />
    }
    else if (role === 'BANKER') {
        return <BankerGuaranteeList />
    }

};

export default GuaranteeList;
