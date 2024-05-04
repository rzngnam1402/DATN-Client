import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import { useEffect, useState } from 'react';
import axiosClient from '../../../axios/axios';
import GuaranteeFilter from '../../../components/guarantees/GuaranteeFilter';
import BankerGuaranteeListing from '../../../components/guarantees/banker/BankerGuaranteeListing';

const BCrumb = [
    {
        to: '/',
        title: 'Guarantee',
    },
    {
        title: 'Guarantees list',
    },
];

const BankerGuaranteeList = () => {

    const [guarantees, setGuarantees] = useState([]);
    const [displayedGuarantees, setDisplayedGuarantees] = useState([]);
    const [counter, setCounter] = useState({ total: 0, under_review: 0, approved: 0, rejected: 0 });
    const [bankName, setBankName] = useState('Bank');

    useEffect(() => {
        axiosClient.get('guarantee/banker/all')
            .then((response) => {
                const sortedGuarantees = response.data.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setGuarantees(sortedGuarantees);
                setDisplayedGuarantees(sortedGuarantees);
                updateCounter(sortedGuarantees);
                setBankName(sortedGuarantees[0]?.bankName || 'Bank');
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
        <PageContainer title={`${bankName} Guarantees`} description={`${bankName} Guarantees`}>
            <Breadcrumb title={`${bankName} Guarantees`} items={BCrumb} />
            <ChildCard>
                <GuaranteeFilter counter={counter} handleFilter={handleFilterChange} />
                <BankerGuaranteeListing guarantees={displayedGuarantees} />
            </ChildCard>
        </PageContainer >
    );
};

export default BankerGuaranteeList;
