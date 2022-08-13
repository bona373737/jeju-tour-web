/**
 * @Filename: NoticeSlice.js
 * @Author: 구나래(nrggrnngg@gmail.com)
 * @Description: 공지사항 데이터 처리
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pending, fulfilled, rejected } from "../Util";
import axios from 'axios';

const URL = '/notice';

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
        [getNoticeList.pending]: pending,
        [getNoticeList.fulfilled]: fulfilled,
        [getNoticeList.rejected]: rejected,
    }
});

export default NoticeSlice.reducer;