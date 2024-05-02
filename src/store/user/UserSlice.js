import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosClient from '../../axios/axios';

const initialState = {
    user: {},
    status: 'idle',  // 'idle', 'loading', 'succeeded', 'failed'
    error: null
}

export const fetchUser = createAsyncThunk(
    'users/me',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosClient.get('users/me');
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
})

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
