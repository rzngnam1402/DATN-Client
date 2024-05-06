import { useParams } from "react-router";
import { useAuth } from "../../../hooks/useAuth"
import BankerApplicationDetail from "./BankerApplicationDetail";
import ClientApplicationDetail from "./ClientApplicationDetail";

const ApplicationDetailTracking = () => {
    const { applicationId } = useParams()
    const { role } = useAuth()
    if (role === 'CLIENT') {
        return <ClientApplicationDetail applicationId={applicationId} />
    }
    if (role === 'BANKER') {
        return <BankerApplicationDetail applicationId={applicationId} />
    }

};

export default ApplicationDetailTracking;
