import { configureStore } from '@reduxjs/toolkit';
import authReducer from './SignupReducer/auth.slice';
import userlistReducer from './userlistReducer/list.slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        userlist: userlistReducer,
    },
});
