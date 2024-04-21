import React from 'react';
import { Grid, Typography, AvatarGroup, Avatar, Stack, Button, Box } from '@mui/material';

const StillQuestions = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} lg={10}>
        <Box bgcolor="primary.light" p={5} mt={7}>
          <Typography variant="h3" textAlign="center" mt={3} mb={1}>
            Still have questions
          </Typography>
          <Typography variant="h6" fontWeight={400} lineHeight="23px" color="textSecondary" textAlign="center">
            Can&apos;t find the answer you&apos;re looking for ? Please chat to our friendly team.
          </Typography>
          <Box textAlign="center" mt={3}>
            <Button variant="contained" color="primary">
              Email  us
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StillQuestions;
