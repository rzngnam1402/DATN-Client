import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import axiosClient from '../../../axios/axios';
import ClientGuaranteeCollapsible from '../../../components/guarantees/client/ClientGuaranteeCollapsible';

const BCrumb = [
    {
        to: '/',
        title: 'Guarantees',
    },
    {
        title: 'Issue Guarantee',
    },
];


const ClientGuaranteeDetail = ({ guaranteeId }) => {
    const [guarantee, setGuarantee] = useState({})
    useEffect(() => {
        axiosClient.get('guarantee/' + guaranteeId)
            .then((response) => {
                setGuarantee(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [guaranteeId])

    return (
        <PageContainer title={`${guarantee.bankName} Guarantees`} description={`${guarantee.bankName}Guarantees`} >
            <Breadcrumb title={`${guarantee.bankName} Guarantees`} items={BCrumb} />
            <ChildCard>
                <ClientGuaranteeCollapsible guarantee={guarantee} />
            </ChildCard>
        </PageContainer >

    )
}

export default ClientGuaranteeDetail
