import { useParams } from "react-router";

import { useAuth } from "../../../hooks/useAuth";
import BankerGuaranteeDetail from "./BankerGuaranteeDetail";
import ClientGuaranteeDetail from "./ClientGuaranteeDetail";

const GuaranteeDetailTracking = () => {
    const { guaranteeId } = useParams()
    const { role } = useAuth()
    if (role === 'CLIENT') {
        return <ClientGuaranteeDetail guaranteeId={guaranteeId} />

    }
    if (role === 'BANKER') {
        return <BankerGuaranteeDetail guaranteeId={guaranteeId} />
    }

};

export default GuaranteeDetailTracking;
