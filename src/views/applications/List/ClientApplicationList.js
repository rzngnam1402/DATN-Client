import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import { useEffect, useState } from 'react';
import axiosClient from '../../../axios/axios';
import ApplicationFilter from '../../../components/applications/ApplicationsFilter';
import ClientApplicationListing from '../../../components/applications/client/ClientApplicationsListing';


const BCrumb = [
    {
        to: '/',
        title: 'Applications',
    },
    {
        title: 'Applications list',
    },
];

const ClientApplicationList = () => {

    const [applications, setApplications] = useState([]);
    const [displayedApplications, setDisplayedApplications] = useState([]);
    const [counter, setCounter] = useState({ total: 0, under_review: 0, approved: 0, rejected: 0 });


    useEffect(() => {
        axiosClient.get('application/user/all')
            .then((response) => {
                const sortedApplications = response.data.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setApplications(sortedApplications);
                setDisplayedApplications(sortedApplications);
                updateCounter(sortedApplications);
            })
            .catch((error) => { console.log(error) });
    }, []);

    const updateCounter = (data) => {
        setCounter({
            total: data.length,
            under_review: data.filter(app => app.status === 'UNDER_REVIEW').length,
            approved: data.filter(app => app.status === 'APPROVED').length,
            rejected: data.filter(app => app.status === 'REJECTED').length
        });
    };

    const handleFilterChange = (status) => {
        const filtered = status
            ? applications.filter(app => app.status === status).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            : [...applications];
        setDisplayedApplications(filtered);
    };


    return (
        <PageContainer title="Your Applications" description="Your Applications">
            <Breadcrumb title="Your Applications" items={BCrumb} />
            <ChildCard>
                <ApplicationFilter counter={counter} handleFilter={handleFilterChange} />
                <ClientApplicationListing applications={displayedApplications} />
            </ChildCard>
        </PageContainer>
    );
};

export default ClientApplicationList;
