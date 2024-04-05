import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import { useEffect, useState } from 'react';
import axiosClient from '../../../axios/axios';
import ApplicationFilter from '../../../components/applications/ApplicationsFilter';
import ClientApplicationListing from '../../../components/applications/client/ApplicationsListing';


const BCrumb = [
    {
        to: '/',
        title: 'Home',
    },
    {
        title: 'Applications',
    },
];

const ClientApplicationList = () => {

    const [applications, setApplications] = useState([])
    const [counter, setCounter] = useState({ total: 0, under_review: 0, approved: 0, rejected: 0 });

    useEffect(() => {
        axiosClient.get('application/user/all')
            .then((response) => {
                setApplications(response.data)
                const total_apps = response.data.length;
                const under_review_apps = response.data.filter((app) => app.status == 'UNDER_REVIEW').length;
                const approved_apps = response.data.filter((app => app.status == 'APPROVED')).length;
                const rejected = response.data.filter((app => app.status == 'REJECTED')).length;
                setCounter({
                    total: total_apps,
                    under_review: under_review_apps,
                    approved: approved_apps,
                    rejected: rejected
                })
            })
            .catch((error) => { console.log(error) })
    }, [])

    return (
        <PageContainer title="Your Applications" description="Your Applications">
            <Breadcrumb title="Your Applications" items={BCrumb} />
            <ChildCard>
                <ApplicationFilter counter={counter} />
                <ClientApplicationListing applications={applications} />
            </ChildCard>
        </PageContainer>
    );
};

export default ClientApplicationList;
