import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import ApplicationFilter from '../../../components/applications/ApplicationsFilter';
import { useEffect, useState } from 'react';
import axiosClient from '../../../axios/axios';
import BankerApplicationListing from '../../../components/applications/banker/BankerApplicationsListing';

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

    const [applications, setApplications] = useState([])
    const [counter, setCounter] = useState({ total: 0, under_review: 0, approved: 0, rejected: 0 });
    const [bankName, setBankName] = useState('Bank')

    useEffect(() => {
        axiosClient.get('application/banker/all')
            .then((response) => {
                setApplications(response.data)
                const total_apps = response.data.length;
                const under_review_apps = response.data.filter((app) => app.status == 'UNDER_REVIEW').length;
                const approved_apps = response.data.filter((app => app.status == 'APPROVED')).length;
                const rejected = response.data.filter((app => app.status == 'REJECTED')).length;
                const bankName = response.data[0].bankName
                setCounter({
                    total: total_apps,
                    under_review: under_review_apps,
                    approved: approved_apps,
                    rejected: rejected
                })
                setBankName(bankName)
            })
            .catch((error) => { console.log(error) })
    }, [])

    return (
        <PageContainer title={`${bankName} Applications`} description={`${bankName} Applications`}>
            <Breadcrumb title={`${bankName} Applications`} items={BCrumb} />
            <ChildCard>
                <ApplicationFilter counter={counter} />
                <BankerApplicationListing applications={applications} />
            </ChildCard>
        </PageContainer >
    );
};

export default BankerApplicationList;
