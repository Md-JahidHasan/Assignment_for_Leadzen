import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import personSlice from "./reducer";
import {apiSlice} from './apiSlice';


export const store = configureStore({
    reducer:{
        person: personSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})