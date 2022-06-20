/**
 * @filename PlaceSlice.js
 * @description 관광지데이터를 불러오기

 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//백엔드 구축하고 나면 url변경하기
const URL = "http://localhost:3001/place";

export const getPlaceList = createAsyncThunk('PlaceSlice/getPlaceList',async(payload,{rejectWithValue})=>{
    let result = null;
    try{
        result = await axios.get(URL);
    }
    catch(error){
        result = rejectWithValue(error.response);
    }
    return result;
});

const PlaceSlice = createSlice({
    name:'place',
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{

    },
    extraReducers:{
        [getPlaceList.pending]: (state, {payload})=>{
            return { ...state, loading:true}
        },
        [getPlaceList.fulfilled]: (state, {payload})=>{
            return {
                data: payload?.data,
                loading: false,
                error: null
            }
        },
        [getPlaceList.rejected]:(state, {payload})=>{
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

export default PlaceSlice.reducer;