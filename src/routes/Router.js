import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';
import { SignOut } from '../views/authentication/auth1/Logout';
import { ProtectedRoute } from './ProtectedRoute';
import IndemnityDetailTracking from '../views/Indemnity/Detail/IndemnityDetail';
import IndemnityForm from '../views/forms/indemnity/IndemnityForm';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

// Pages
const AccountSetting = Loadable(
  lazy(() => import('../views/account-setting/AccountSetting')),
);
const Faq = Loadable(lazy(() => import('../views/faq/Faq')));
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))

// Users
const UserList = Loadable(lazy(() => import('../views/users/List/UserList')));

// Guarantees
const GuaranteeList = Loadable(lazy(() => import('../views/guarantee/List/GuaranteeList')));
const GuaranteeDetailTracking = Loadable(lazy(() => import('../views/guarantee/Detail/GuaranteeDetail')));

// Applications
const ApplicationDetailTracking = Loadable(lazy(() => import('../views/applications/Detail/ApplicationDetailTracking')));
const ApplicationList = Loadable(lazy(() => import('../views/applications/List/ApplicationList')));
const ApplicationForm = Loadable(lazy(() => import('../views/forms/application/ApplicationForm')));

// Indemnity
const IndemnityList = Loadable(lazy(() => import('../views/Indemnity/List/IndemnityList')))

// authentication
const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/auth1/ForgotPassword')));
const TwoSteps = Loadable(lazy(() => import('../views/authentication/auth1/TwoSteps')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Maintenance = Loadable(lazy(() => import('../views/authentication/Maintenance')));

// landingpage
const Landingpage = Loadable(lazy(() => import('../views/landingpage/Landingpage')));

const Router = [
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <FullLayout />,
        children: [
          { path: '/', element: <Navigate to="/account-settings" /> },
          { path: 'tracking/applications', element: <ApplicationList /> },
          { path: 'tracking/users', element: <UserList /> },
          { path: 'tracking/applications/:applicationId', element: <ApplicationDetailTracking /> },
          { path: 'tracking/guarantees', element: <GuaranteeList /> },
          { path: 'tracking/guarantees/:guaranteeId', element: <GuaranteeDetailTracking /> },
          { path: 'indemnity', element: <IndemnityList /> },
          { path: 'indemnity/:indemnityId', element: <IndemnityDetailTracking /> },
          { path: '/account-settings', element: <AccountSetting /> },
          { path: '/faq', element: <Faq /> },
          { path: '/dashboard', element: <Dashboard /> },
          { path: '/forms/application-form', element: <ApplicationForm /> },
          { path: '/forms/indemnity-form', element: <IndemnityForm /> },
          { path: '*', element: <Navigate to="/auth/404" /> },
        ],
      }
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/auth/404', element: <Error /> },
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/logout', element: <SignOut /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/forgot-password', element: <ForgotPassword /> },
      { path: '/auth/two-steps', element: <TwoSteps /> },
      { path: '/auth/maintenance', element: <Maintenance /> },
      { path: '/landingpage', element: <Landingpage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
