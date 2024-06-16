import React, { useEffect, useState } from 'react';
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
    MenuItem,
    Select,
    FormControl,
} from '@mui/material';

import { toast } from 'react-toastify';
import axiosClient from "../../../axios/axios"

const UsersListing = ({ users }) => {
    const [page, setPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    const itemsPerPage = 5;
    useEffect(() => {
        const indexOfLastItem = page * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const items = users.slice(indexOfFirstItem, indexOfLastItem);
        setCurrentItems(items);
    }, [page, users])


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChipChange = (id, email, event) => {
        const newRole = event.target.value;
        if (email === 'admin@vieguarantee.com') {
            toast.error("Sorry, You can not change the role of this admin account!")
            return;
        }
        const updatedItems = currentItems.map(item => {
            if (item.id === id) {
                axiosClient.patch(`users/update/role/${item.id}`,
                    { newRole: newRole }
                )
                    .then((response) => {
                        console.log(response.data)
                        toast.success("You have changed the role successfully!")
                    })
                    .catch((error) => {
                        toast.error(error)
                    });
                return { ...item, role: newRole };
            }
            else {
                return item
            }
        });
        setCurrentItems([...updatedItems]);
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
                                <Typography variant="h6">Position</Typography>
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
                                <TableCell style={{ minWidth: '150px' }}>
                                    <Typography>{user?.position ? user.position : 'Individual'}</Typography>
                                </TableCell>
                                <TableCell>
                                    <FormControl size="small" fullWidth>
                                        <Select
                                            value={user.role}
                                            onChange={(target) => {
                                                handleChipChange(user?.id, user?.email, target)
                                            }}
                                            renderValue={(selected) => (
                                                <Chip
                                                    sx={{
                                                        backgroundColor:
                                                            selected === 'BANKER'
                                                                ? (theme) => theme.palette.success.light
                                                                : selected === 'CLIENT'
                                                                    ? (theme) => theme.palette.error.light
                                                                    : selected === 'ADMIN'
                                                                        ? (theme) => theme.palette.info.light
                                                                        : undefined,
                                                    }}
                                                    label={selected}
                                                />
                                            )}
                                        >
                                            <MenuItem value="BANKER">Banker</MenuItem>
                                            <MenuItem value="CLIENT">Client</MenuItem>
                                            <MenuItem value="ADMIN">Admin</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>

                                <TableCell>
                                    <Typography>{user?.company}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box my={3} display="flex" justifyContent={'center'}>
                <Pagination
                    count={Math.ceil(currentItems.length / itemsPerPage)}
                    page={page}
                    onChange={handleChangePage}
                    color="primary"
                />
            </Box>
        </Box >
    );
};

export default UsersListing;
