import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import ApplicationFilter from '../../../components/apps/client/applications/ApplicationsFilter';
import ApplicationListing from '../../../components/apps/client/applications/ApplicationsListing';
import { useEffect, useState } from 'react';
import axiosClient from '../../../axios/axios';

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

    useEffect(() => {
        axiosClient.get('application/banker/all')
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
        <PageContainer title="Applications" description=" Applications" >
            <Breadcrumb title=" Applications" items={BCrumb} />
            <ChildCard>
                <ApplicationFilter counter={counter} />
                <ApplicationListing applications={applications} />
            </ChildCard>
        </PageContainer >
    );
};

export default BankerApplicationList;
