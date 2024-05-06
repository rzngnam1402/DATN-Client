import React, { useState } from 'react';
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
} from '@mui/material';
import { formatDate } from '../../../utils/date';
import { Link } from 'react-router-dom';

const ClientIndemnityListing = ({ indemnities }) => {
    const [page, setPage] = useState(1);

    const itemsPerPage = 5;
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = indemnities?.slice(indexOfFirstItem, indexOfLastItem);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

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
                                <Typography
                                    variant="h6"
                                    style={{ maxWidth: '200px' }}
                                > Applicant Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant="h6"
                                    style={{ maxWidth: '200px' }}
                                > Beneficiary Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant="h6"
                                    style={{ maxWidth: '200px' }}
                                > Bank Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Status</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Date</Typography>
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentItems?.map((indemnity) => (
                            <TableRow
                                key={indemnity.indemnity_id}
                                to={`${indemnity.indemnity_id}`}
                                hover
                                component={Link}
                                style={{ textDecoration: 'none' }}
                            >
                                <TableCell>
                                    <Stack direction="row" gap="10px" alignItems="center">
                                        <Typography variant="h6" fontWeight="500" >
                                            {indemnity.guarantee.guarantee_id}.{indemnity.guarantee.beneficiary_detail_id}.{indemnity.guarantee.applicant_detail_id}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell style={{ maxWidth: '200px' }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="500"
                                        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {indemnity.guarantee.ApplicantDetail.businessName}
                                    </Typography>
                                </TableCell>
                                <TableCell style={{ maxWidth: '200px' }}>
                                    <Stack direction="row" gap="10px" alignItems="center">
                                        <Typography variant="h6"
                                            fontWeight="500"
                                            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {indemnity.guarantee.BeneficiaryDetail.businessName}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell style={{ maxWidth: '200px' }}>
                                    <Stack direction="row" gap="10px" alignItems="center">
                                        <Typography variant="h6"
                                            fontWeight="500"
                                            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {indemnity.guarantee.bankName}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            backgroundColor:
                                                indemnity.status === 'ISSUED'
                                                    ? (theme) => theme.palette.success.light
                                                    : (theme) => theme.palette.error.light

                                        }}
                                        size="small"
                                        label={indemnity.status}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography>{formatDate(indemnity.createdAt)}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box my={3} display="flex" justifyContent={'center'}>
                <Pagination
                    count={Math.ceil(indemnities?.length / itemsPerPage)}
                    page={page}
                    onChange={handleChangePage}
                    color="primary"
                />
            </Box>
        </Box >
    );
};

export default ClientIndemnityListing;
