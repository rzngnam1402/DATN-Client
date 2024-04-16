import { useParams } from "react-router";
import { useAuth } from "../../../axios/hooks/useAuth";
import BankerApplicationDetail from "./BankerApplicationDetail";

const ApplicationDetailTracking = () => {
    const { applicationId } = useParams()
    const { role } = useAuth()
    // if (role === 'CLIENT') {
    //     return <ClientApplicationDetail />
    // }
    if (role === 'BANKER') {
        return <BankerApplicationDetail applicationId={applicationId} />
    }

};

export default ApplicationDetailTracking;
