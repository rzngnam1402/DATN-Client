import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import BankerApplicationCollapsible from '../../../components/forms/form-vertical/BankerApplicationCollapsible';
import axiosClient from '../../../axios/axios';

const BCrumb = [
    {
        to: '/',
        title: 'Home',
    },
    {
        title: 'Application details',
    },
];


const BankerApplicationDetail = ({ applicationId }) => {
    const [application, setApplication] = useState({})
    useEffect(() => {
        axiosClient.get('application/' + applicationId)
            .then((response) => {
                setApplication(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [applicationId])

    return (
        <PageContainer title={`${application.bankName} Applications`} description={`${application.bankName}Applications`} >
            <Breadcrumb title={`${application.bankName} Applications`} items={BCrumb} />
            <ChildCard>
                <BankerApplicationCollapsible application={application} />
            </ChildCard>
        </PageContainer >
    )
}

export default BankerApplicationDetail
