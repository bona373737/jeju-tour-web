import React from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import Home from './Home';
import Tab from './Tab';
import ListDetail from './ListDetail';
import CardDetail from './CardDetail';
import Login from './Login'
import Signup from './Signup';
import MyLike from './MyLike'
import MyReview from './MyReview';
import MyQna from './MyQna';
import ServiceCenter from './ServiceCenter';
import KeywordSearch from './KeywordSearch';

//header높이 만큼 Main영역 상단에 padding값 적용
const MainContainer=styled.div`
    padding-top: 7vh;
`;

const Main = () => {
    return (
        <MainContainer>
            <Routes>
                {/*메인화면 */}
                <Route path="/" exact element={<Home/>}/>
                <Route path='/tab/:api' element={<Tab/>}/>
                {/* 여행컨텐츠 상세페이지 */}
                <Route path='/magazine/:id' element={<CardDetail/>}/>
                {/* 관광지,숙박,음식 상세페이지 */}
                <Route path='/tab/:api/:id' element={<ListDetail/>}/>
                {/* 로그인,회원가입 페이지 */}
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                {/* 사이드바의 메뉴 페이지 */}
                <Route path='/mylike' element={<MyLike/>}/>
                <Route path='/myreview' element={<MyReview/>}/>
                <Route path='/myqna' element={<MyQna/>}/>
                <Route path='/sc' element={<ServiceCenter/>}/>
                {/* 검색 결과 페이지 */}
                <Route path='/search' element={<KeywordSearch />}/>
            </Routes>
        </MainContainer>
    );
};

export default Main;