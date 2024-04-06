import React, { useEffect, useState } from 'react';
import { Box, Avatar, Typography, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import img1 from 'src/assets/images/profile/user-1.jpg';
import { IconPower } from '@tabler/icons';
import { Link } from "react-router-dom";
import axiosClient from '../../../../../axios/axios';

export const Profile = () => {
  const customizer = useSelector((state) => state.customizer);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';

  const [user, setUser] = useState({ username: 'Username', role: 'Role' })

  useEffect(() => {
    axiosClient.get('users/me')
      .then(({ data }) => {
        setUser({ username: data.username, role: data.role })
      })
      .catch((error) => console.error(error));
  }, [])

  return (
    <Box
      display={'flex'}
      alignItems="center"
      gap={2}
      sx={{ m: 3, p: 2, bgcolor: `${'secondary.light'}` }}
    >
      {!hideMenu ? (
        <>
          <Avatar alt="Remy Sharp" src={img1} />
          <Box>
            <Typography style={{ display: "inline-block", whiteSpace: "pre-line" }}
              variant="h6" color="textPrimary">{user.username}</Typography>
            <Typography variant="caption" color="textSecondary">{user.role}</Typography>
          </Box>
          <Box sx={{ ml: 'auto' }}>
            <Tooltip title="Logout" placement="top">
              <IconButton color="primary" component={Link} to="auth/logout" aria-label="logout" size="small">
                <IconPower size="20" />
              </IconButton>
            </Tooltip>
          </Box>
        </>
      ) : (
        ''
      )}
    </Box>
  );
};
