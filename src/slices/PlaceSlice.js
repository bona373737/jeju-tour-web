/**
 * @Filename: PlaceSlice.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 여행지 데이터를 불러오기
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL='/place';

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getPlaceList = createAsyncThunk('PlaceSlice/getPlaceList',async(payload,{rejectWithValue})=>{
    let result = null;
    try{
        result = await axios.get(URL,{
            withCredentials: true
        });
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
        /** 다중행 데이터 조회를 위한 액션 함수 */
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

        
    }//extraReduces end
})

export default PlaceSlice.reducer;