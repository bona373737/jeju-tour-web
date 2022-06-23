/**
 * @filename Tab.js
 * @description path파라미터를 전달받아 axis통신 파라미터로 전달 
 *              관광지,숙소,음식 각 데이터를 불러와 화면에 리스트 출력
 */
import React, { useEffect } from 'react';
import { Routes, useParams } from 'react-router-dom';
import {useQueryString} from "../hooks/useQueryString";
import { useSelector, useDispatch } from 'react-redux';
import { getTabList } from '../slices/TabSlice';

import TabButton from '../components/TabButton';
import ListItem from '../components/ListItem';

const Tab = () => {
  //path파라미터 값 가져오기
  const {api} = useParams();

  //redux사용하여 여행지 리스트 가져오기
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state)=>state.tab);

  //tab바뀔때마다 데이터 재전송
  useEffect(()=>{
    dispatch(getTabList({
      api: api
    }))
  },[api])

    return (
        <div>
          <TabButton></TabButton>
          <h1>탭</h1>
          {
            data && data.map((v,i)=>{
              return <ListItem key={i} item={v} api={api}></ListItem>
            })
          }
        </div>
    );
};

export default Tab;