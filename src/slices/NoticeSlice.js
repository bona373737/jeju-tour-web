/**
 * @Filename: NoticeSlice.js
 * @Author: 구나래(nrggrnngg@gmail.com)
 * @Description: 공지사항 데이터 처리
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

//백엔드 구축하고 나면 url변경하기
const URL = 'http://localhost:3001/notice';

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getNoticeList = createAsyncThunk('NoticeSlice/getNoticeList', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.get(URL);
    } catch(err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const NoticeSlice = createSlice({
    name: 'notice',
    initialState: {
        data: null,         
        loading: false,     
        error: null        
    },
    reducers: {},
    extraReducers: {
        /** 다중행 데이터 조회를 위한 액션 함수 */
        [getNoticeList.pending]: (state, { payload }) => {
            return {...state, loading: true }
        },
        [getNoticeList.fulfilled]: (state, { payload }) => {
            return {
                data: payload?.data,
                loading: false,
                error: null
            }
        },
        [getNoticeList.rejected]: (state, { payload }) => {
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

export default NoticeSlice.reducer;