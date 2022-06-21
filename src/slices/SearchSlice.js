import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getKeywordSearch = createAsyncThunk('SearchSlice/getKeywordSearch', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.get('http://localhost:3001/search', {
            params: {
                keyword: payload.keyword,
            }
        });
    } catch(err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        data: null,         
        loading: false,     
        error: null        
    },
    reducers: {},
    extraReducers: {
        [getKeywordSearch.pending]: (state, { payload }) => {
            return {...state, loading: true }
        },
        [getKeywordSearch.fulfilled]: (state, { payload }) => {
            return {
                data: payload?.data,
                loading: false,
                error: null
            }
        },
        [getKeywordSearch.rejected]: (state, { payload }) => {
            return {
                data: null,
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    }
});

export default SearchSlice.reducer;