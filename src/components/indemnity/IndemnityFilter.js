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

const IndemnityFilter = ({ counter, handleFilter }) => {
    return (
        <Grid container spacing={3} textAlign="center">
            <Grid item xs={12} sm={6} lg={3}>
                <BoxStyled
                    onClick={() => handleFilter()}
                    sx={{ backgroundColor: 'primary.light', color: 'primary.main' }}
                >
                    <Typography variant="h3">{counter.total}</Typography>
                    <Typography variant="h6">Total Indemnities</Typography>
                </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <BoxStyled
                    onClick={() => handleFilter('PENDING')}
                    sx={{ backgroundColor: 'warning.light', color: 'warning.main' }}
                >
                    <Typography variant="h3">{counter.pending}</Typography>
                    <Typography variant="h6">Pending</Typography>
                </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <BoxStyled
                    onClick={() => handleFilter('FULFILLED')}
                    sx={{ backgroundColor: 'success.light', color: 'success.main' }}
                >
                    <Typography variant="h3">{counter.fulfilled}</Typography>
                    <Typography variant="h6">Fulfilled</Typography>
                </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <BoxStyled
                    onClick={() => handleFilter('REJECTED')}
                    sx={{ backgroundColor: 'error.light', color: 'error.main' }}
                >
                    <Typography variant="h3">{counter.rejected}</Typography>
                    <Typography variant="h6">Rejected</Typography>
                </BoxStyled>
            </Grid>
        </Grid >
    );
};

export default IndemnityFilter;
