import { useParams } from "react-router";

import { useAuth } from "../../../hooks/useAuth";
import ClientIndemnityDetail from "./ClientIndemnityDetail";

const IndemnityDetailTracking = () => {
    const { indemnityId } = useParams()
    const { role } = useAuth()
    if (role === 'CLIENT') {
        return <ClientIndemnityDetail indemnityId={indemnityId} />

    }
    if (role === 'BANKER') {
        // return <BankerGuaranteeDetail guaranteeId={guaranteeId} />
    }

};

export default IndemnityDetailTracking;
