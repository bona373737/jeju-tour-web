/**
 * @Filename: TabPage.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 여행지, 숙소, 음식 탭 버튼 클릭 시 보여질 페이지
 *               path 파라미터를 전달받아 axios 통신 파라미터로 전달
 *               여행지, 숙소, 음식 각 데이터를 불러와 화면에 리스트로 출력
 */
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { getPlaceList } from "../slices/PlaceSlice";
import { getAccomList } from "../slices/AccomSlice";
import { getFoodList } from "../slices/FoodSlice";
import { getIsLogin } from '../slices/MemberSlice';


import Spinner from '../components/Spinner';
import TabArea from "../components/TabArea";
import ListItem from "../components/items/ListItem";
import HashtagBtn from "../components/buttons/HashtagBtn";
import Heart from "../components/Heart";
import { getMyLikeList } from "../slices/MyLikeSlice";


const TabPageContainer = styled.div`
    .content_wrap {
        width: 80%;
        margin: auto;
        margin-top: 20px;
        .hashtag_wrap {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            -ms-overflow-style: none;
            
            &::-webkit-scrollbar {
                display: none;
            }
            
            a{
                flex: 0 0 auto;
            }
        }
        .list_wrap{
            .item_wrap{
                display: flex;
            }
        }
    }
`;

const TabPage = () => {
    //path파라미터 값 가져오기
    const { api } = useParams();
    let tagArr = ["섬속의섬", "마을관광", "오름", "실내관광지", "수국"];
    if (api === "place") {
    } else if (api === "accom") {
    } else if (api === "food") {
    }

    const dispatch = useDispatch();
    //redux_여행지 목록데이터
    const { data, loading, error } = useSelector((state) => state[api]);  
    //redux_회원정보
    const { data:loginData} = useSelector((state) => state.member);    

    //페이지 마운트 될때 로그인상태 확인--> 로그인여부에 따라 "좋아요"버튼 조건부 렌더링
    useEffect(() => {
        dispatch(getIsLogin());
        if(loginData){
            dispatch(getPlaceList());
            dispatch(getAccomList());
            dispatch(getFoodList());
        }
    }, []);
    
    //tab바뀔때마다 데이터 재전송
    useEffect(() => {
        if (api === "place") {
            dispatch(getPlaceList());
        } else if (api === "accom") {
            dispatch(getAccomList());
        } else if (api === "food") {
            dispatch(getFoodList());
        }
        // console.log(data);
    }, [dispatch, api]);

    //태그버튼이 클릭되면
    const onTagClick = useCallback(() => {
        //파란색으로 css변경
        //해당 태그명을 검색조건으로 하여 데이터 재요청
    });

    return (
        <TabPageContainer>
            <TabArea/>

            <Spinner visible={loading} />
            
            <div className="content_wrap">
                <div className="hashtag_wrap">
                    {tagArr.map((v, i) => (
                        <HashtagBtn key={i} to="" onClick="">
                            {v}
                        </HashtagBtn>
                    ))}
                </div>
                <div className="list_wrap">
                    {data &&
                        data.item.map((v, i) => {
                            return (
                                <div key={i} className="item_wrap">
                                    <ListItem item={v} api={api}></ListItem>
                                    {loginData&&(
                                        <Heart item={v}></Heart>
                                        )
                                    }
                                </div>
                            ) 
                        })}
                </div>
            </div>
        </TabPageContainer>
    );
};

export default TabPage;
