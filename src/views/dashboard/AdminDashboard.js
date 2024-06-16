import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import TopCards from '../../components/dashboard/TopCards';
import BanksSummary from '../../components/dashboard/BanksSummary';
import Growth from '../../components/dashboard/Growth';
import { toast } from 'react-toastify';
import axiosClient from '../../axios/axios';
import RecentTransactions from '../../components/dashboard/RecentTransactions';

const AdminDashboard = () => {
    const [data, setData] = useState({
        usersCount: 'No data',
        applicationsCount: 'No data',
        guaranteesCount: 'No data',
        banksCount: 'No data',
        latestIssuedGuarantee: [],
    })
    useEffect(() => {
        Promise.all([
            axiosClient.get('users/stats'),
            axiosClient.get('application/stats'),
            axiosClient.get('guarantee/stats')
        ]).then(([usersRes, applicationRes, guaranteeRes]) => {
            const { count: usersCount } = usersRes.data;
            const { count: applicationsCount } = applicationRes.data;
            const { count: guaranteesCount, banksCount, latestIssuedGuarantee } = guaranteeRes.data;
            setData({
                usersCount,
                applicationsCount,
                guaranteesCount,
                banksCount,
                latestIssuedGuarantee
            });
        }).catch(err => {
            toast.error('Failed to fetch stats: ' + err.message);
        });
    }, []);
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item sm={12} lg={12}>
                    <TopCards
                        key={new Date()}
                        usersCount={data.usersCount}
                        applicationsCount={data.applicationsCount}
                        guaranteesCount={data.guaranteesCount}
                        banksCount={data.banksCount}
                    />
                </Grid>
                <Grid item xs={12} lg={5}>
                    <RecentTransactions
                        latestIssuedGuarantee={data.latestIssuedGuarantee}
                    />
                </Grid>
                <Grid item xs={12} lg={7}>
                    <BanksSummary />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Growth
                        guaranteesCount={data.guaranteesCount}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AdminDashboard;
