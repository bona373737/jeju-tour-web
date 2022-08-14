/**
 * @Filename: AccomSlice.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 숙소 데이터를 불러오기
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pending, fulfilled, rejected } from "../Util";
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
    reducers:{},
    extraReducers:{
        /** 다중행 데이터 조회를 위한 액션 함수 */
        [getAccomList.pending]: pending,
        [getAccomList.fulfilled]: fulfilled,
        [getAccomList.rejected]: rejected,
    }
})

export default AccomSlice.reducer;