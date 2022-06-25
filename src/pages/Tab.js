/**
 * @filename Tab.js
 * @description path파라미터를 전달받아 axis통신 파라미터로 전달 
 *              관광지,숙소,음식 각 데이터를 불러와 화면에 리스트 출력
 */
import React,{ useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPlaceList } from '../slices/PlaceSlice';
import { getAccomList } from '../slices/AccomSlice';
import { getFoodSlice } from '../slices/FoodSlice';

import TabButton from '../components/TabButton';
import ListItem from '../components/ListItem';

const Tab = () => {
  //path파라미터 값 가져오기
  const {api} = useParams();

  //redux사용하여 여행지 리스트 가져오기
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state)=>state[api]);

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

    return (
        <div>
          <TabButton></TabButton>
          {
            data && data.map((v,i)=>{
              return <ListItem key={i} item={v} api={api}></ListItem>
            })
          }
        </div>
    );
};

export default Tab;