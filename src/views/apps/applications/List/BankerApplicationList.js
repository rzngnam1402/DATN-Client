import Breadcrumb from '../../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import ApplicationFilter from '../../../../components/applications/ApplicationsFilter';
import { useEffect, useState } from 'react';
import axiosClient from '../../../../axios/axios';
import BankerApplicationListing from '../../../../components/applications/banker/BankerApplicationsListing';

const BCrumb = [
    {
        to: '/',
        title: 'Home',
    },
    {
        title: 'Applications',
    },
];

const BankerApplicationList = () => {

    const [applications, setApplications] = useState([]);
    const [displayedApplications, setDisplayedApplications] = useState([]);
    const [counter, setCounter] = useState({ total: 0, under_review: 0, approved: 0, rejected: 0 });
    const [bankName, setBankName] = useState('Bank');

    useEffect(() => {
        axiosClient.get('application/banker/all')
            .then((response) => {
                const sortedApplications = response.data.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setApplications(sortedApplications);
                setDisplayedApplications(sortedApplications);
                updateCounter(sortedApplications);
                setBankName(sortedApplications[0]?.bankName || 'Bank');
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
        <PageContainer title={`${bankName} Applications`} description={`${bankName} Applications`}>
            <Breadcrumb title={`${bankName} Applications`} items={BCrumb} />
            <ChildCard>
                <ApplicationFilter counter={counter} handleFilter={handleFilterChange} />
                <BankerApplicationListing applications={displayedApplications} />
            </ChildCard>
        </PageContainer >
    );
};

export default BankerApplicationList;
