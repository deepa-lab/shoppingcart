import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllProducts = createAsyncThunk('fetch-all-products',async (apiUrl: string)=>{
    const response = await axios.get(apiUrl);
    return response.data;
})

export const productSlice = createSlice({
    name: 'productData',
    initialState: { data: {products:[]}, fetchStatus: '' },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchAllProducts.fulfilled, (state, action)=>{
            state.data = action.payload,
            state.fetchStatus = 'success'
        }).addCase(fetchAllProducts.pending,(state)=>{
            state.fetchStatus = 'loading'
        }).addCase(fetchAllProducts.rejected, state=>{
            state.fetchStatus = 'error'
        })
    }
});