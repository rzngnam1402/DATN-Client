import { useEffect, useState } from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import axiosClient from '../../../axios/axios';
import GuaranteeFilter from '../../../components/guarantees/GuaranteeFilter';
import ClientGuaranteeListing from '../../../components/guarantees/client/ClientGuaranteeListing';

const BCrumb = [
    {
        to: '/',
        title: 'Guaratantee',
    },
    {
        title: 'Guarantees list',
    },
];

const ClientGuaranteeList = () => {

    const [guarantees, setGuarantees] = useState([]);
    const [displayedGuarantees, setDisplayedGuarantees] = useState([]);
    const [counter, setCounter] = useState({ total: 0, under_review: 0, approved: 0, rejected: 0 });

    useEffect(() => {
        axiosClient.get('guarantee/client/all')
            .then((response) => {
                const sortedGuarantees = response.data.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setGuarantees(sortedGuarantees);
                setDisplayedGuarantees(sortedGuarantees);
                updateCounter(sortedGuarantees);
            })
            .catch((error) => { console.log(error) });
    }, []);

    const updateCounter = (data) => {
        setCounter({
            total: data.length,
            not_issued: data.filter(app => app.status === "NOT_ISSUED").length,
            issued: data.filter(app => app.status === 'ISSUED').length,
        });
    };

    const handleFilterChange = (status) => {
        const filtered = status
            ? guarantees.filter(app => app.status === status).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            : [...guarantees];
        setDisplayedGuarantees(filtered);
    };


    return (
        <PageContainer title={`Your Guarantees`} description={`Your Guarantees`}>
            <Breadcrumb title={`Your Guarantees`} items={BCrumb} />
            <ChildCard>
                <GuaranteeFilter counter={counter} handleFilter={handleFilterChange} />
                <ClientGuaranteeListing guarantees={displayedGuarantees} />
            </ChildCard>
        </PageContainer >
    );
};

export default ClientGuaranteeList;
