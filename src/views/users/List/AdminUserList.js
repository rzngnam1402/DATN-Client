import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import BankerApplicationListing from '../../../components/applications/banker/BankerApplicationsListing';
import UsersListing from '../../../components/users/admin/UsersListing';
import { useEffect, useState } from 'react';
import axiosClient from '../../../axios/axios';
import { use } from 'i18next';

const BCrumb = [
    {
        to: '/',
        title: 'Users',
    },
    {
        title: 'Users List',
    },
];

const AdminUserList = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        axiosClient.get('users/all')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => { console.log(error) });
    }, []);
    return (
        <PageContainer title="Users List" description="Users List">
            <Breadcrumb title="Users List" items={BCrumb} />
            <ChildCard>
                <UsersListing users={users} />
            </ChildCard>
        </PageContainer>
    )
};

export default AdminUserList;
