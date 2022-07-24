/**
 * @filename Tab.js
 * @description path파라미터를 전달받아 axis통신 파라미터로 전달 
 *              관광지,숙소,음식 각 데이터를 불러와 화면에 리스트 출력
 */
import React,{ useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPlaceList } from '../slices/PlaceSlice';
import { getAccomList } from '../slices/AccomSlice';
import { getFoodSlice } from '../slices/FoodSlice';
import styled from 'styled-components';

import TabButton from '../components/TabButton';
import ListItem from '../components/ListItem';
import Hashtag from '../components/Hashtag';

const TabContainer = styled.div`
  .content_wrap{
    width: 80%;
    margin: auto;
    margin-top: 20px;
    .hashtag_wrap{
      display: flex;
      flex-wrap: wrap;
    }
    .list_wrap{

    }
  }
`;

const Tab = () => {
  //path파라미터 값 가져오기
  const {api} = useParams();
  let tagArr=['섬속의섬','마을관광','오름','실내관광지','수국'];
  if(api === 'place'){
    
  }else if(api === 'accom'){

  }else if(api ==='food'){

  }

  //redux사용하여 여행지 리스트 가져오기
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state)=>state[api]);
  // console.log(data?.item);

  //tab바뀔때마다 데이터 재전송
  useEffect(()=>{
    if(api==="place"){
      dispatch(getPlaceList());
    }else if(api==='accom'){
      dispatch(getAccomList());
    }else if(api==='food'){
      dispatch(getFoodSlice());
    }
  },[dispatch,api]);

  //태그버튼이 클릭되면
  const onTagClick =useCallback(()=>{
    //파란색으로 css변경
    //해당 태그명을 검색조건으로 하여 데이터 재요청
  });

    return (
        <TabContainer>
          <TabButton></TabButton>
          <div className="content_wrap">
            <div className='hashtag_wrap'>
              {
                tagArr.map((v,i)=> <Hashtag key={i} to="" onClick="">{v}</Hashtag>)
              }
            </div>
            <div className="list_wrap">
              {
                data && data.item.map((v,i)=>{
                  return <ListItem key={i} item={v} api={api}></ListItem>
                })
              }
            </div>
          </div>
        </TabContainer>
    );
};

export default Tab;