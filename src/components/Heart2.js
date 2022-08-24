/** 
 * @Filename: Heart.js
 * @Description: 좋아요 하트버튼
 */
import React, { useCallback } from 'react';
import styled from 'styled-components';
import likeIcon from '../assets/icon/star_active.png';
import { useDispatch } from 'react-redux';
import {getMyLikeList} from '../slices/MyLikeSlice'
import {deleteMyLikeItem} from '../slices/MyLikeSlice'
import { getPlaceList } from "../slices/PlaceSlice";



 const HeartContainer = styled.div`
    .like_icon{
        width: 50px;
        cursor: pointer;
        //좋아요 버튼 이미지 색상 red
        filter:invert(11%) sepia(99%) saturate(6586%) hue-rotate(350deg) brightness(100%) contrast(88%);
    }
 `;

 const Heart2 = ({item}) => {
    const dispatch = useDispatch();   
    let like_no;
    if(item){
        like_no = item.like_no;
    }
    
    //클릭시 좋아요 삭제   
    const onClick = useCallback((e)=>{
            //이벤트버블링 방지 
            e.stopPropagation();
            e.preventDefault();

            //좋아요 삭제요청전송 
            try {
                dispatch(deleteMyLikeItem({like_no:like_no}))
            } catch (error) {
                window.alert(error);
                return;
            }
            //redux dispatch
            dispatch(getMyLikeList());
            dispatch(getPlaceList());
            

    },[]);

     return (
         <HeartContainer>
            <img src={likeIcon} className="like_icon" onClick={onClick}></img>
         </HeartContainer>
     );
 };
 
 export default Heart2;