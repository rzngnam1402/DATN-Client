import { useParams } from "react-router";

import BankerGuaranteeDetail from "./BankerGuaranteeDetail";
import { useAuth } from "../../../axios/hooks/useAuth";

const GuaranteeDetailTracking = () => {
    const { guaranteeId } = useParams()
    const { role } = useAuth()
    // if (role === 'CLIENT') {
    //     return <ClientApplicationDetail />
    // }
    if (role === 'BANKER') {
        return <BankerGuaranteeDetail guaranteeId={guaranteeId} />
    }

};

export default GuaranteeDetailTracking;
