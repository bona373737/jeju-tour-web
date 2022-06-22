/**
 * @filename PlaceSlice.js
 * @description 관광지데이터를 불러오기

 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//백엔드 구축하고 나면 url변경하기
const URL={
    place : "http://localhost:3001/place",
    accom : "http://localhost:3001/accom",
    food : "http://localhost:3001/food"
}


export const getTabList = createAsyncThunk('PlaceSlice/getPlaceList',async(payload,{rejectWithValue})=>{
    let result = null;
    try{
        result = await axios.get(URL[payload.api]);
    }
    catch(error){
        result = rejectWithValue(error.response);
    }
    return result;
});

const TabSlice = createSlice({
    name:'tab',
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{

    },
    extraReducers:{
        [getTabList.pending]: (state, {payload})=>{
            return { ...state, loading:true}
        },
        [getTabList.fulfilled]: (state, {payload})=>{
            return {
                data: payload?.data,
                loading: false,
                error: null
            }
        },
        [getTabList.rejected]:(state, {payload})=>{
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

export default TabSlice.reducer;