/** 
 * @Filename: Heart.js
 * @Description: 좋아요 하트버튼
 */
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { postItem, deleteMyLikeItem } from '../slices/MyLikeSlice';
import { getPlaceList } from "../slices/PlaceSlice";

import useAxios from 'axios-hooks';
import likeIcon from '../assets/icon/star_active.png';
import axios from 'axios';

 const HeartContainer = styled.div`
    .like_icon{
        width: 50px;
        cursor: pointer;
        //gray색상(좋아요X 상태)
        filter: invert(99%) sepia(2%) saturate(2923%) hue-rotate(203deg) brightness(115%) contrast(76%);
    }
    .like_icon_active{
        width: 50px;
        cursor: pointer;
        //red색상(좋아요O 상태)
        filter:invert(11%) sepia(99%) saturate(6586%) hue-rotate(350deg) brightness(100%) contrast(88%);
    }
 `;

 const Heart = ({item}) => {
    const ref_id = item.place_no? item.place_no : (item.accom_no? item.accom_no : item.food_no );
    const ref_type = item.place_no? 'place' : (item.accom_no? 'accom' : 'food' );
    const like_no = Number(item.like_no);

    const dispatch = useDispatch();
    // const { data, loading, error } = useSelector((state) => state.myLike);

    //초기값은 좋아요에 등록된 여부에 따라 결정
    const initIsLiked = like_no? true : false;
    const initLikedCss = like_no? "like_icon_active" : "like_icon";
    const [isLiked, setIsLiked] = useState(initIsLiked);
    const [likedCss, setLikedCss] = useState(initLikedCss);
    
    //좋아요 버트 클릭이벤트
    const onClick = useCallback((e)=>{
        // e.stopPropagation();
        e.preventDefault();

        if(isLiked){
            //isLiked값이 현재 true면 클릭시 좋아요 삭제요청전송 
            try {
                dispatch(deleteMyLikeItem({like_no:like_no}))
                dispatch(getPlaceList());
                // axios.delete(`/likes/${like_no}`)
            } catch (error) {
                window.alert(error);
                return;
            }
            //+ 아이콘색상 회색으로 변경
            setLikedCss("like_icon")
            //좋아요 삭제요청 성공시 isLiked값 false로 변경
            setIsLiked(false)

        }else if(!isLiked){
            //isLiked값이 현재 false면 클릭시 좋아요 추가요청 전송 
            try {
                dispatch(postItem({
                    ref_id:ref_id,
                    ref_type:ref_type
                }))
                // axios.post('/likes',{
                //     ref_id: ref_id,
                //     ref_type: ref_type,
                // })

            } catch (error) {
                window.alert(error);
                return;
            }
            //+ 아이콘색상 빨강으로 변경
            setLikedCss("like_icon_active")
            //좋아요 추가요청 성공시 isLiked값 ture로 변경
            setIsLiked(true)

        }
    },[isLiked]);

     return (
        <HeartContainer>
            <img src={likeIcon} className={likedCss} onClick={onClick}></img>
        </HeartContainer>
     );
 };
 
 export default Heart;