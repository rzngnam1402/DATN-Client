import { useEffect, useState } from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import axiosClient from '../../../axios/axios';
import IndemnityFilter from '../../../components/indemnity/IndemnityFilter';
import ClientIndemnityListing from '../../../components/indemnity/client/ClientIndemnityListing';
import BankerIndemnityListing from '../../../components/indemnity/banker/BankerIndemnityListing';

const BCrumb = [
    {
        to: '/',
        title: 'Indemnity',
    },
    {
        title: 'Indemnity list',
    },
];

const BankerIndemnityList = () => {
    const [indemnities, setIndemnities] = useState([]);
    const [displayedIndemnities, setDisplayedIndemnities] = useState([]);
    const [counter, setCounter] = useState({ total: 0, pending: 0, fulfilled: 0, rejected: 0 });

    const handleFilterChange = (status) => {
        const filtered = status
            ? indemnities.filter(app => app.status === status).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            : [...indemnities];
        setDisplayedIndemnities(filtered);
    };
    const updateCounter = (data) => {
        setCounter({
            total: data.length,
            pending: data.filter(app => app.status === "PENDING").length,
            rejected: data.filter(app => app.status === 'REJECTED').length,
            fulfilled: data.filter(app => app.status === 'FULFILLED').length,
        });
    };

    useEffect(() => {
        axiosClient.get('indemnity/banker/all')
            .then((response) => {
                console.log(response)
                const sortedIndemnities = response.data.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setIndemnities(sortedIndemnities);
                setDisplayedIndemnities(sortedIndemnities);
                updateCounter(sortedIndemnities);
            })
            .catch((error) => { console.log(error) });
    }, []);

    return (
        <PageContainer title={`Your Indemnities`} description={`Your Indemnities`}>
            <Breadcrumb title={`Your Indemnities`} items={BCrumb} />
            <ChildCard>
                <IndemnityFilter counter={counter} handleFilter={handleFilterChange} />
                <BankerIndemnityListing indemnities={displayedIndemnities} />
            </ChildCard>
        </PageContainer >
    );
};

export default BankerIndemnityList;
