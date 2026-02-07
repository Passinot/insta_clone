
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../apis/api';
import { apiSheet } from '../../apis/apiSheet';

export const signupUser = createAsyncThunk(
    'auth/signupUser',
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            // Passing name and email as payload
            const response = await api.post(apiSheet.signup, { name, email, password });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            // Passing name and email as payload
            const response = await api.post(apiSheet.login, { email, password });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
