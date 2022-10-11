/** 
 * @Filename: Heart.js
 * @Description: 좋아요 하트버튼
 */
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { postItem, deleteMyLikeItem } from '../slices/MyLikeSlice';
import { getPlaceList } from "../slices/PlaceSlice";
import { getAccomList } from "../slices/AccomSlice";
import { getFoodList } from "../slices/FoodSlice";

import heart from '../assets/icon/heart.png';
import heart_active from '../assets/icon/heart_active.png';

 const HeartContainer = styled.div`
    display: flex;
    align-items: center;
    .like_icon{
        width: 20px;
        cursor: pointer;
    }
 `;

 const Heart = ({item}) => {
    // console.log(item)
    const ref_id = item.place_no? item.place_no : (item.accom_no? item.accom_no : item.food_no );
    const ref_type = item.place_no? 'place' : (item.accom_no? 'accom' : 'food' );
    const like_no = item.like_no;

    const dispatch = useDispatch();

    //초기값은 좋아요에 등록된 여부에 따라 결정
    const initIsLiked = like_no? true : false;
    const like_icon = like_no? heart_active : heart;
    const [isLiked, setIsLiked] = useState(initIsLiked);
    
    //좋아요 버트 클릭이벤트
    const onClick = useCallback((e)=>{
        // e.stopPropagation();
        e.preventDefault();

        if(isLiked){
            //isLiked값이 현재 true면 클릭시 좋아요 삭제요청전송 
            console.log("ref_id :"+ ref_id+ "ref_type :" + ref_type)
            try {
                dispatch(deleteMyLikeItem({like_no:like_no}))
            } catch (error) {
                window.alert(error);
                return;
            }
            setIsLiked(false)
            if(ref_type==="place"){
                dispatch(getPlaceList());
            }else if( ref_type ==='accom'){
                dispatch(getAccomList());
            }else if(ref_type==='food'){
                dispatch(getFoodList());
            }

        }else if(!isLiked){
            //isLiked값이 현재 false면 클릭시 좋아요 추가요청 전송 
            try {
                console.log("ref_id :"+ ref_id+ "ref_type :" + ref_type)
                dispatch(postItem({
                    ref_id:ref_id,
                    ref_type:ref_type
                }))
            } catch (error) {
                window.alert(error);
                return;
            }
            setIsLiked(true)
        }
    },[isLiked]);

     return (
        <HeartContainer>
            <img src={like_icon} className="like_icon" onClick={onClick}></img>
        </HeartContainer>
     );
 };
 
 export default Heart;