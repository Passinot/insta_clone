
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../apis/api';
import { apiSheet } from '../../apis/apiSheet';

export const getUserList = createAsyncThunk(
    'userlist/getUserList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(apiSheet.userlisting);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
