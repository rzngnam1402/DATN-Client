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

const UsersListing = ({ users }) => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };
    // const currentItems = [];
    console.log(currentItems);
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
                                <Typography variant="h6">User ID</Typography>
                            </TableCell>
                            <TableCell style={{ width: '200px' }}>
                                <Typography variant="h6" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    Email
                                </Typography>
                            </TableCell>
                            <TableCell style={{ width: '200px' }}>
                                <Typography variant="h6" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    Username
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Role</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Company</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentItems.map((user) => (
                            <TableRow
                                key={user.id}
                                to={`${user.id}`}
                                hover
                                // component={Link}
                                style={{ textDecoration: 'none' }}
                            >
                                <TableCell>
                                    <Stack direction="row" gap="10px" alignItems="center">
                                        <Typography variant="h6" fontWeight="500">{user?.id}</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell style={{ maxWidth: '300px' }}>
                                    <Typography style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {user?.email}
                                    </Typography>
                                </TableCell>
                                <TableCell style={{ maxWidth: '300px' }}>
                                    <Typography style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {user?.username}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            backgroundColor:
                                                user.role === 'BANKER'
                                                    ? (theme) => theme.palette.success.light
                                                    : user.role === 'CLIENT'
                                                        ? (theme) => theme.palette.error.light
                                                        : user.role === 'ADMIN'
                                        }}
                                        size="small"
                                        label={user.role}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography>{user?.company}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <Box my={3} display="flex" justifyContent={'center'}>
                <Pagination
                    count={Math.ceil(applications.length / itemsPerPage)}
                    page={page}
                    onChange={handleChangePage}
                    color="primary"
                />
            </Box> */}
        </Box>
    );
};

export default UsersListing;
