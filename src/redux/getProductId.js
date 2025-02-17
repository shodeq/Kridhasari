import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import { products } from "./data"

const initialState = {
    data: [],
    loading: false,
    error: "",
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getProductId = createAsyncThunk("getProduct", async (id) => {
    const product = products.find(item => item.id == id);
    return product
});

export const getProductIdSlice = createSlice({
    name: 'getProductId',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductId.pending, (state) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getProductId.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.data = action.payload;
        })
        builder.addCase(getProductId.rejected, (state) => {
            state.loading = false;
            state.error = "error fetching product data";
        })
    }
})



export default getProductIdSlice.reducer