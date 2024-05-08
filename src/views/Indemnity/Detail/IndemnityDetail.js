import { useParams } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import ClientIndemnityDetail from "./ClientIndemnityDetail";
import BankerIndemnityDetail from "./BankerIndemnityDetail";

const IndemnityDetailTracking = () => {
    const { indemnityId } = useParams()
    const { role } = useAuth()
    if (role === 'CLIENT') {
        return <ClientIndemnityDetail indemnityId={indemnityId} />

    }
    if (role === 'BANKER') {
        return <BankerIndemnityDetail indemnityId={indemnityId} />
    }

};

export default IndemnityDetailTracking;
