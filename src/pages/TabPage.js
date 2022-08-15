/**
 * @Filename: TabPage.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 여행지, 숙소, 음식 탭 버튼 클릭 시 보여질 페이지
 *               path 파라미터를 전달받아 axios 통신 파라미터로 전달
 *               여행지, 숙소, 음식 각 데이터를 불러와 화면에 리스트로 출력
 */
import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPlaceList } from "../slices/PlaceSlice";
import { getAccomList } from "../slices/AccomSlice";
import { getFoodList } from "../slices/FoodSlice";
import styled from "styled-components";

import Spinner from '../components/Spinner';
import TabArea from "../components/TabArea";
import ListItem from "../components/items/ListItem";
import HashtagBtn from "../components/buttons/HashtagBtn";

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
        .list_wrap {
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

    //redux사용하여 여행지 리스트 가져오기
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state[api]);
    // console.log(data);

    //tab바뀔때마다 데이터 재전송
    useEffect(() => {
        if (api === "place") {
            dispatch(getPlaceList());
        } else if (api === "accom") {
            dispatch(getAccomList());
        } else if (api === "food") {
            dispatch(getFoodList());
        }
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
                            return <ListItem key={i} item={v} api={api}></ListItem>;
                        })}
                </div>
            </div>
        </TabPageContainer>
    );
};

export default TabPage;
