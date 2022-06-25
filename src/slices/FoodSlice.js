/**
 * @filename FoodSlice.js
 * @description 음식점데이터를 불러오기

 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//백엔드 구축하고 나면 url변경하기
const URL="http://localhost:3001/food";

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getFoodSlice = createAsyncThunk('FoodSlice/getFoodSlice',async(payload,{rejectWithValue})=>{
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
    reducers:{

    },
    extraReducers:{
        /** 다중행 데이터 조회를 위한 액션 함수 */
        [getFoodSlice.pending]: (state, {payload})=>{
            return { ...state, loading:true}
        },
        [getFoodSlice.fulfilled]: (state, {payload})=>{
            return {
                data: payload?.data,
                loading: false,
                error: null
            }
        },
        [getFoodSlice.rejected]:(state, {payload})=>{
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

export default FoodSlice.reducer;