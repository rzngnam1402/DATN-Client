import React, { useState } from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import { Stack } from '@mui/system';
import AuthSocialButtons from './AuthSocialButtons';
import axiosClient from '../../../axios/axios';

const AuthRegister = ({ title, subtitle, subtext }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const handleSignup = () => {
    axiosClient
      .post(
        "auth/signup",
        {
          username,
          email,
          password,
          phone,
          address,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(() => {
        navigate("/auth/login", { replace: true });
      })
      .catch((err) => console.error(err.response.data.message));
  };
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <AuthSocialButtons title="Sign up with" />

      <Box mt={3}>
        <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            or sign up with
          </Typography>
        </Divider>
      </Box>

      <Box>
        <Stack mb={3}>
          <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
          <CustomTextField
            id="username"
            variant="outlined"
            fullWidth
            htmlFor="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <CustomFormLabel>Email Adddress</CustomFormLabel>
          <CustomTextField
            id="email"
            variant="outlined"
            fullWidth
            htmlFor="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <CustomFormLabel>Password</CustomFormLabel>
          <CustomTextField
            id="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            htmlFor="password" />
          <CustomFormLabel htmlFor="phone">Phone</CustomFormLabel>
          <CustomTextField
            id="phone"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            htmlFor="phone" />
        </Stack>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          component={Link}
          onClick={handleSignup}
        // to="/auth/login"
        >
          Sign Up
        </Button>
      </Box>
      {subtitle}
    </>
  );
}
export default AuthRegister;
