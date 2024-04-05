import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    IconButton,
    Chip,
    Stack,

    Tooltip,
    TextField,
    Pagination,
    TableContainer,
} from '@mui/material';
import { IconTrash } from '@tabler/icons';
import { formatDate } from '../../../utils/date';

const ClientApplicationListing = ({ applications }) => {
    console.log(applications)
    const getVisibleTickets = (tickets, filter, ticketSearch) => {
        switch (filter) {
            case 'total_tickets':
                return tickets.filter(
                    (c) => !c.deleted && c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
                );

            case 'Pending':
                return tickets.filter(
                    (c) =>
                        !c.deleted &&
                        c.Status === 'Pending' &&
                        c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
                );

            case 'Closed':
                return tickets.filter(
                    (c) =>
                        !c.deleted &&
                        c.Status === 'Closed' &&
                        c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
                );

            case 'Open':
                return tickets.filter(
                    (c) =>
                        !c.deleted &&
                        c.Status === 'Open' &&
                        c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
                );

            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    };

    const tickets = useSelector((state) =>
        getVisibleTickets(
            state.ticketReducer.tickets,
            state.ticketReducer.currentFilter,
            state.ticketReducer.ticketSearch,
        ),
    );
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
                            <TableCell>
                                <Typography variant="h6">Applicant Name</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Beneficiary Name</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Bank Name</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Status</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Date</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h6">Action</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applications.map((application) => (
                            <TableRow key={application.application_id} hover>
                                <TableCell>{application.application_id}</TableCell>
                                <TableCell>
                                    <Box>
                                        <Typography variant="h6" fontWeight="500" >
                                            {application.BeneficiaryDetail.businessName}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Stack direction="row" gap="10px" alignItems="center">
                                        <Typography variant="h6" fontWeight="500" >{application.ApplicantDetail.businessName}</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Stack direction="row" gap="10px" alignItems="center">
                                        <Typography variant="h6">{application.bankName}</Typography>
                                    </Stack>
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
                                <TableCell align="right">
                                    <Tooltip title="Delete Application">
                                        <IconButton
                                        // onClick={() => dispatch(DeleteTicket(ticket.Id))}
                                        >
                                            <IconTrash size="18" />
                                        </IconButton>
                                    </Tooltip>
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

export default ClientApplicationListing;
