/** 
 * @Filename: Heart.js
 * @Description: 좋아요 하트버튼
 */
 import React, { useCallback, useState } from 'react';
 import styled from 'styled-components';
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

 const Heart = (props) => {
     
     //컴포넌트 마운트될때 좋아요 여부 확인 get요청 자동실행
     const [{data,loading,error},refetch] = useAxios({
         url:'/likes/isliked',
         method:'GET',
         params:{
             ref_id:props.ref_id,
             ref_type:props.ref_type
            }
        },{useCache:false});
        
    const ref_id = props.ref_id;
    const ref_type = props.ref_type;
    const like_no = data?.like_no;

    // console.log(data);
    //좋아요상태 초기값은 좋아요 여부확인 get요청 결과값으로 셋팅
    const initIsLiked = data?.item.isLiked? true : false;
    const initLikedCss = data?.item.isLiked? "like_icon_active" : "like_icon";
    const [isLiked, setIsLiked] = useState(initIsLiked);
    const [likedCss, setLikedCss] =useState(initLikedCss);
    
    //좋아요 버트 클릭이벤트
    const onClick = useCallback(()=>{
        console.log(isLiked)
        if(isLiked){
            //isLiked값이 현재 true면 클릭시 좋아요 삭제요청전송 
            try {
                axios.delete(`/likes/${data?.item.like_no}`)
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
                axios.post('/likes',{
                    ref_id: ref_id,
                    ref_type: ref_type,
                    like_no: like_no
                })
            } catch (error) {
                window.alert(error);
                return;
            }
            //+ 아이콘색상 빨강으로 변경
            setLikedCss("like_icon_active")
            //좋아요 추가요청 성공시 isLiked값 ture로 변경
            setIsLiked(true)

        }
    },[isLiked,data]);

     return (
         <HeartContainer>
            <img src={likeIcon} className={likedCss} onClick={onClick}></img>
         </HeartContainer>
     );
 };
 
 export default Heart;