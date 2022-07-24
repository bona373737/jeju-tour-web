/**
 * @Filename: FAQSlice.js
 * @Author: 구나래(nrggrnngg@gmail.com)
 * @Description: 자주 묻는 질문 데이터 처리
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

//백엔드 구축하고 나면 url변경하기
const URL = 'http://localhost:3001/faq';

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
        [getFAQList.pending]: (state, { payload }) => {
            return {...state, loading: true }
        },
        [getFAQList.fulfilled]: (state, { payload }) => {
            return {
                data: payload?.data,
                loading: false,
                error: null
            }
        },
        [getFAQList.rejected]: (state, { payload }) => {
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

export default FAQSlice.reducer;