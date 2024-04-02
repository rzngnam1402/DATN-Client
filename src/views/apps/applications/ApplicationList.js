import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import TicketListing from '../../../components/apps/tickets/TicketListing';
import ChildCard from 'src/components/shared/ChildCard';
import ApplicationFilter from '../../../components/apps/applications/ApplicationsFilter';

const BCrumb = [
    {
        to: '/',
        title: 'Home',
    },
    {
        title: 'Applications',
    },
];

const ApplicationList = () => {
    return (
        <PageContainer title="Your Applications" description="Your Applications">
            <Breadcrumb title="Your Applications" items={BCrumb} />
            <ChildCard>
                {/* <ApplicationFilter /> */}
                {/* <TicketListing /> */}
            </ChildCard>
        </PageContainer>
    );
};

export default ApplicationList;
