import React from 'react';
import DashboardCard from '../shared/DashboardCard';
import {
    Timeline,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    timelineOppositeContentClasses,
} from '@mui/lab';
import { formatTime } from '../../utils/date';

const RecentTransactions = ({ latestIssuedGuarantee }) => {
    const transactions = [
        {
            time: formatTime(latestIssuedGuarantee[0]?.createdAt),
            dotColor: 'primary',
            content: `Guarantee issued from ${latestIssuedGuarantee[0]?.bankName}`,
            connector: true,
        },
        {
            time: formatTime(latestIssuedGuarantee[1]?.createdAt),
            dotColor: 'secondary',
            content: `Guarantee issued from ${latestIssuedGuarantee[1]?.bankName}`,
            connector: true,
        },
        {
            time: formatTime(latestIssuedGuarantee[2]?.createdAt),
            dotColor: 'success',
            content: `Guarantee issued from ${latestIssuedGuarantee[2]?.bankName}`,
            connector: true,
        },
        {
            time: formatTime(latestIssuedGuarantee[3]?.createdAt),
            dotColor: 'warning',
            content: `Guarantee issued from ${latestIssuedGuarantee[0]?.bankName}`,
            connector: false,
        },


    ];

    return (
        <DashboardCard title="Recent Transactions" >
            <Timeline
                className="theme-timeline"
                sx={{
                    p: 0,
                    mb: '-37px',
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.6,
                        paddingLeft: 0.5,
                    },
                }}
            >
                {transactions.map((transaction, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>{transaction.time}</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color={transaction.dotColor} variant="outlined" />
                            {transaction.connector && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{transaction.content}</TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </DashboardCard>
    );
};

export default RecentTransactions;
