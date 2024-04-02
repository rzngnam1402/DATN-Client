import axiosClient from '../../../axios/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    applications: [],
    currentFilter: '',
};

export const ApplicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        getApplications: (state, action) => {
            state.applications = action.payload;
        },
    },
});

export const { getApplications } = ApplicationSlice.actions;


export const fetchApplications = createAsyncThunk(
    'applications',
    async () => {
        // const response = await fetch('http://your-api-endpoint/applications');
        // if (!response.ok) {
        //     throw new Error('Failed to fetch applications');
        // }
        // const data = await response.json();
        // return data;
    }
);
export default ApplicationSlice.reducer;
