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

const BankerApplicationListing = ({ applications }) => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = applications.slice(indexOfFirstItem, indexOfLastItem);

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
                                <Typography variant="h6">Ref. Num</Typography>
                            </TableCell>
                            <TableCell style={{ width: '300px' }}>
                                <Typography variant="h6" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    Applicant Name
                                </Typography>
                            </TableCell>
                            <TableCell style={{ width: '300px' }}>
                                <Typography variant="h6" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    Beneficiary Name
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
                        {currentItems.map((application) => (
                            <TableRow
                                key={application.application_id}
                                to={`${application.application_id}`}
                                hover
                                component={Link}
                                style={{ textDecoration: 'none' }}
                            >
                                <TableCell>
                                    <Stack direction="row" gap="10px" alignItems="center">
                                        <Typography variant="h6" fontWeight="500">{application.application_id}</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell style={{ maxWidth: '300px' }}>
                                    <Typography variant="h6" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {application.ApplicantDetail.businessName}
                                    </Typography>
                                </TableCell>
                                <TableCell style={{ maxWidth: '300px' }}>
                                    <Typography variant="h6" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {application.BeneficiaryDetail.businessName}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            backgroundColor:
                                                application.status === 'APPROVED'
                                                    ? (theme) => theme.palette.success.light
                                                    : application.status === 'REJECTED'
                                                        ? (theme) => theme.palette.error.light
                                                        : application.status === 'UNDER_REVIEW'
                                                            ? (theme) => theme.palette.warning.light
                                                            : application.status === 'Moderate',
                                        }}
                                        size="small"
                                        label={application.status}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography>{formatDate(application.createdAt)}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box my={3} display="flex" justifyContent={'center'}>
                <Pagination
                    count={Math.ceil(applications.length / itemsPerPage)}
                    page={page}
                    onChange={handleChangePage}
                    color="primary"
                />
            </Box>
        </Box>
    );
};

export default BankerApplicationListing;
