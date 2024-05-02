import React, { useEffect } from 'react';
import { Box, Avatar, Typography, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IconPower } from '@tabler/icons';
import { Link } from "react-router-dom";
import { fetchUser } from '../../../../../store/user/UserSlice';

export const Profile = () => {
  const dispatch = useDispatch();
  const customizer = useSelector((state) => state.customizer);
  const user = useSelector(state => state.user.user);
  const status = useSelector(state => state.user.status);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser());
    }
  }, [status, dispatch]);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';

  return (
    <Box
      display={'flex'}
      alignItems="center"
      gap={2}
      sx={{ m: 3, p: 2, bgcolor: `${'secondary.light'}` }}
    >
      {!hideMenu ? (
        <>
          <Avatar
          // alt="Remy Sharp"
          // src={img1}
          />
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
