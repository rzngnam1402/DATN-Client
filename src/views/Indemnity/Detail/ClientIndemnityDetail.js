import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import axiosClient from '../../../axios/axios';
import ClientGuaranteeCollapsible from '../../../components/guarantees/client/ClientGuaranteeCollapsible';
import ClientIndemnityCollapsible from '../../../components/indemnity/client/ClientIndemnityCollapsible';

const BCrumb = [
    {
        to: '/',
        title: 'Indemnities',
    },
    {
        title: 'Indemnity details',
    },
];


const ClientIndemnityDetail = ({ indemnityId }) => {
    const [indemnity, setIndemnity] = useState({})
    useEffect(() => {
        axiosClient.get('indemnity/' + indemnityId)
            .then((response) => {
                setIndemnity(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [indemnityId])

    return (
        <PageContainer title={`Indemnities`} description={`Indemnities`} >
            <Breadcrumb title={`Indemnities`} items={BCrumb} />
            <ChildCard>
                <ClientIndemnityCollapsible indemnity={indemnity} />
            </ChildCard>
        </PageContainer >

    )
}

export default ClientIndemnityDetail
