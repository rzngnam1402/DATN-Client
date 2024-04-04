import { Box, Grid, Typography, styled } from '@mui/material';


const BoxStyled = styled(Box)(() => ({
    padding: '30px',
    transition: '0.1s ease-in',
    cursor: 'pointer',
    color: 'inherit',
    '&:hover': {
        transform: 'scale(1.03)',
    },
}));

const ApplicationFilter = ({ counter }) => {
    return (
        <Grid container spacing={3} textAlign="center">
            <Grid item xs={12} sm={6} lg={3}>
                <BoxStyled
                    // onClick={() => dispatch(setVisibilityFilter('total_tickets'))}
                    sx={{ backgroundColor: 'primary.light', color: 'primary.main' }}
                >
                    <Typography variant="h3">{counter.total}</Typography>
                    <Typography variant="h6">Total Applications</Typography>
                </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <BoxStyled
                    // onClick={() => dispatch(setVisibilityFilter('Pending'))}
                    sx={{ backgroundColor: 'warning.light', color: 'warning.main' }}
                >
                    <Typography variant="h3">{counter.under_review}</Typography>
                    <Typography variant="h6">Under review </Typography>
                </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <BoxStyled
                    // onClick={() => dispatch(setVisibilityFilter('Open'))}
                    sx={{ backgroundColor: 'success.light', color: 'success.main' }}
                >
                    <Typography variant="h3">{counter.approved}</Typography>
                    <Typography variant="h6">Approved</Typography>
                </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <BoxStyled
                    // onClick={() => dispatch(setVisibilityFilter('Closed'))}
                    sx={{ backgroundColor: 'error.light', color: 'error.main' }}
                >
                    <Typography variant="h3">{counter.rejected}</Typography>
                    <Typography variant="h6">Rejected</Typography>
                </BoxStyled>
            </Grid>
        </Grid>
    );
};

export default ApplicationFilter;
