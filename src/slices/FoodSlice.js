/**
 * @Filename: FoodSlice.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 음식점 데이터를 불러오기
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pending, fulfilled, rejected } from "../Util";
import axios from "axios";

const URL="/food";

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getFoodList = createAsyncThunk('FoodSlice/getFoodList',async(payload,{rejectWithValue})=>{
    let result = null;
    try{
        result = await axios.get(URL);
    }
    catch(error){
        result = rejectWithValue(error.response);
    }
    return result;
});

const FoodSlice = createSlice({
    name:'food',
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:{
        /** 다중행 데이터 조회를 위한 액션 함수 */
        [getFoodList.pending]: pending,
        [getFoodList.fulfilled]: fulfilled,
        [getFoodList.rejected]: rejected,
    }
})

export default FoodSlice.reducer;