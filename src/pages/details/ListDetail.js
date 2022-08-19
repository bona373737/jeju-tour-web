/** 
 * @Filename: ListDetail.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 여행지, 숙소, 음식 리스트 클릭 시 보여질 상세페이지
 *               클릭된 리스트를 식별할 수 있도록
 *               props로 클릭된 리스트의 id를 ListDetail.js에 전달한다.
 */
import React from 'react';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useAxios from 'axios-hooks';
import ReviewItem from '../../components/items/ReviewItem';


const DetailContainer=styled.div`
    box-sizing: border-box;
    padding: 15px;
    width: 80%;
    margin: auto;
`;

const ListDetail = () => {
    const location = useLocation();
    const { item } = location.state;

    let ref_id;
    let ref_type;
    
    if(item.place_no){
        ref_id = item.place_no;
        ref_type = 'place';
    }else if(item.accom_no){
        ref_id = item.accom_no;
        ref_type = 'accom';
    }else if(item.food_no){
        ref_id = item.food_no;
        ref_type = 'food';
    }
    
    /**컴포너트 마운트될때 해당 여행지(place_no/accom_no/food_no)에 등록된 리뷰글 목록 get요청 자동실행 */
    const [{data,loading,error},refetch] = useAxios({
        url:`/reviews/${ref_type}/${ref_id}`,
        method:'GET'
    });
    // console.log(data.item);

    return (
        <DetailContainer>

            <h1>{item.title}</h1>
            <h1>{item.introduction}</h1>
            <h1>{item.address}</h1>
            <h1>{item.tag}</h1>
            <hr/>            
            <div className='review_wrap'>
                {
                    data && (
                        data.item.map((v,i)=>
                            <ReviewItem key={i} item={v}></ReviewItem>
                        )
                    )
                }
            </div>    
        </DetailContainer>
    );
};

export default ListDetail;