
import { createSlice } from '@reduxjs/toolkit';
import { getUserList } from './list.thunk';

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const userlistSlice = createSlice({
    name: 'userlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserList.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getUserList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userlistSlice.reducer;
