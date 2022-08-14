/**
 * @Filename: FAQSlice.js
 * @Author: 구나래(nrggrnngg@gmail.com)
 * @Description: 자주 묻는 질문 데이터 처리
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pending, fulfilled, rejected } from "../Util";
import axios from 'axios';

const URL = '/faq';

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getFAQList = createAsyncThunk('FAQSlice/getFAQList', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.get(URL);
    } catch(err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const FAQSlice = createSlice({
    name: 'faq',
    initialState: {
        data: null,         
        loading: false,     
        error: null        
    },
    reducers: {},
    extraReducers: {
        /** 다중행 데이터 조회를 위한 액션 함수 */
        [getFAQList.pending]: pending,
        [getFAQList.fulfilled]: fulfilled,
        [getFAQList.rejected]: rejected,
    }
});

export default FAQSlice.reducer;