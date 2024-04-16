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

const GuaranteeFilter = ({ counter, handleFilter }) => {
    return (
        <Grid container spacing={3} textAlign="center">
            <Grid item xs={12} sm={6} lg={4}>
                <BoxStyled
                    onClick={() => handleFilter()}
                    sx={{ backgroundColor: 'primary.light', color: 'primary.main' }}
                >
                    <Typography variant="h3">{counter.total}</Typography>
                    <Typography variant="h6">Total Guarantees</Typography>
                </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <BoxStyled
                    onClick={() => handleFilter("NOT_ISSUED")}
                    sx={{ backgroundColor: 'warning.light', color: 'warning.main' }}
                >
                    <Typography variant="h3">{counter.not_issued}</Typography>
                    <Typography variant="h6">Not Issued </Typography>
                </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <BoxStyled
                    onClick={() => handleFilter('ISSUED')}
                    sx={{ backgroundColor: 'success.light', color: 'success.main' }}
                >
                    <Typography variant="h3">{counter.issued}</Typography>
                    <Typography variant="h6">Issued</Typography>
                </BoxStyled>
            </Grid>
        </Grid >
    );
};

export default GuaranteeFilter;
