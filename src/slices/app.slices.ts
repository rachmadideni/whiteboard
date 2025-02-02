import { createSlice } from "@reduxjs/toolkit"
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {Action} from 'redux';

export const appSlice = createSlice({
    name: "app",
    initialState: {} as any,
    reducers:{

    },
    // extraReducers: {
    //     [HYDRATE]: (state: any, action: { payload: { subject: any; }; }) => {
    //       console.log('HYDRATE', state, action.payload);
    //       return {
    //         ...state,
    //         ...action.payload.subject,
    //       };
    //     },
    //   },
})