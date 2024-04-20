import React from 'react';
import {
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Chip,
    Stack,
    TextField,
    Pagination,
    TableContainer,
    Button,
} from '@mui/material';
import {
    IconArrowRight,
} from '@tabler/icons';
import { formatDate } from '../../../utils/date';
import { Link } from 'react-router-dom';

const BankerGuaranteeListing = ({ guarantees }) => {
    console.log(guarantees)

    return (
        <Box mt={4}>
            <Box sx={{ maxWidth: '260px', ml: 'auto' }} mb={3}>
                <TextField
                    size="small"
                    label="Search"
                    fullWidth
                />
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h6">Ref. Code</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Applicant Name</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Beneficiary Name</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Status</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Date</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Actions</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {guarantees.map((guarantee) => (
                            <TableRow
                                key={guarantee.guarantee_id}
                                to={`${guarantee.guarantee_id}`}
                                hover
                                component={Link}
                                style={{ textDecoration: 'none' }}
                            >
                                <TableCell>
                                    <Stack direction="row" gap="10px" alignItems="center">
                                        <Typography variant="h6" fontWeight="500" >
                                            {guarantee.guarantee_id}.{guarantee.beneficiary_detail_id}.{guarantee.applicant_detail_id}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Box>
                                        <Typography variant="h6" fontWeight="500" >
                                            {guarantee.ApplicantDetail.businessName}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Stack direction="row" gap="10px" alignItems="center">
                                        <Typography variant="h6" fontWeight="500" >{guarantee.BeneficiaryDetail.businessName}</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            backgroundColor:
                                                guarantee.status === 'ISSUED'
                                                    ? (theme) => theme.palette.success.light
                                                    : (theme) => theme.palette.error.light

                                        }}
                                        size="small"
                                        label={guarantee.status}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography>{formatDate(guarantee.createdAt)}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Button variant='contained'>Issue
                                        <IconArrowRight />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box my={3} display="flex" justifyContent={'center'}>
                <Pagination count={10} color="primary" />
            </Box>
        </Box>
    );
};

export default BankerGuaranteeListing;
