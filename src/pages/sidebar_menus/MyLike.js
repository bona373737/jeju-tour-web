/** 
 * @Filename: MyLike.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 사이드바의 메뉴링크에서 연결되는 내 저장 메뉴 페이지 
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux';
import {getMyLikeList} from '../../slices/MyLikeSlice';
import Heart2 from '../../components/Heart2';

import ThumbItem from '../../components/items/ThumbItem';
import ListItem from '../../components/items/ListItem';
import Spinner from '../../components/Spinner';

const MyLikeContainer = styled.div`
    width: 80%;
    margin: auto;

    button{
        background-color: tomato;
    }
    .thum_wrap{
        //grid학습해서 css변경 하기
        display: flex;
        flex-wrap: wrap;
    }
    .item_wrap{
        display: flex;
    }
`;

const MyLike = () => {
    //이미지로보기,리스트로보기 버튼 클릭 상태값
    const [isClicked, setIsClicked] = useState(false);

    //리덕스초기화
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.myLike);
    // console.log(data);

    //화면 렌더링될때 내저장 리스트 불러오기
    useEffect(()=>{
        dispatch(getMyLikeList());
    },[])


    return (
        <MyLikeContainer>
            <Spinner visible={loading}/>

            {
                isClicked?
                <>
                <button onClick={()=>{setIsClicked(!isClicked)}}>리스트로보기</button>
                <div className="thum_wrap">
                    {data&&
                        data.item.map((v,i)=>{
                            return <ThumbItem key={i} item={v}></ThumbItem> 
                        })
                    }
                </div>
                </>
                :
                <>
                <button onClick={()=>{setIsClicked(!isClicked)}}>이미지로보기</button>
                <div>
                    {data&&
                        data.item.map((v,i)=>{
                            return (
                                <div className='item_wrap' key={i}>
                                    <ListItem item={v}></ListItem>
                                    <Heart2 item={v}></Heart2>
                                </div>
                            )
                        })
                    }
                </div>
                </>
            }
        </MyLikeContainer>
    );
};

export default MyLike;