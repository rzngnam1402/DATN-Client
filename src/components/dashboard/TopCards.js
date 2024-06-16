import React from 'react';
import { Box, CardContent, Grid, Typography } from '@mui/material';

import icon1 from '../../assets/images/svgs/icon-connect.svg';
import icon2 from '../../assets/images/svgs/icon-user-male.svg';
import icon3 from '../../assets/images/svgs/icon-briefcase.svg';
import icon4 from '../../assets/images/svgs/icon-mailbox.svg';
const TopCards = ({ usersCount, banksCount, applicationsCount, guaranteesCount }) => {

  const topcards = [
    {
      icon: icon2,
      title: 'Users',
      digits: usersCount,
      bgcolor: 'primary',
    },
    {
      icon: icon3,
      title: 'Participate banks',
      digits: banksCount,
      bgcolor: 'warning',
    },
    {
      icon: icon4,
      title: 'Applications',
      digits: applicationsCount,
      bgcolor: 'secondary',
    },
    {
      icon: icon1,
      title: 'Guarantees',
      digits: guaranteesCount,
      bgcolor: 'info',
    },
  ]

  return (
    <Grid container spacing={3} mt={3}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={3} key={i}>
          <Box bgcolor={topcard.bgcolor + '.light'} textAlign="center">
            <CardContent>
              <img src={topcard.icon} alt={topcard.icon} width="50" />
              <Typography
                color={topcard.bgcolor + '.main'}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
                {topcard.title}
              </Typography>
              <Typography color={topcard.bgcolor + '.main'} variant="h4" fontWeight={600}>
                {topcard.digits}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
