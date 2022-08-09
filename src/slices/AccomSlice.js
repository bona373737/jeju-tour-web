/**
 * @Filename: AccomSlice.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 숙소 데이터를 불러오기
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL="/accom";

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getAccomList = createAsyncThunk('AccomSlice/getAccomList',async(payload,{rejectWithValue})=>{
    let result = null;
    try{
        result = await axios.get(URL);
    }
    catch(error){
        result = rejectWithValue(error.response);
    }
    return result;
});

const AccomSlice = createSlice({
    name:'accom',
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{

    },
    extraReducers:{
        /** 다중행 데이터 조회를 위한 액션 함수 */
        [getAccomList.pending]: (state, {payload})=>{
            return { ...state, loading:true}
        },
        [getAccomList.fulfilled]: (state, {payload})=>{
            return {
                data: payload?.data,
                loading: false,
                error: null
            }
        },
        [getAccomList.rejected]:(state, {payload})=>{
            return {
                data: null,
                loading: false,
                error: {
                    code: payload?.status ? payload.status: 500,
                    message: payload?.statusText? payload.statusText: 'Server Error'
                }
            }
        }
    }
})

export default AccomSlice.reducer;