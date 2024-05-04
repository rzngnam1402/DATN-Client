import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import { Grid } from '@mui/material';

import Questions from '../../components/pages/faq/Questions';
import StillQuestions from '../../components/pages/faq/StillQuestions';

const BCrumb = [
  {
    to: '/',
    title: 'Settings',
  },
  {
    title: 'FAQ',
  },
];

const Faq = () => {
  return (
    <PageContainer title="Faq" description="this is Faq page">
      <Breadcrumb title="FAQ" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Questions />
          <StillQuestions />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Faq;
