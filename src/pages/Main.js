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
import MyQNA from './MyQNA';
import ServiceCenter from './ServiceCenter';
import KeywordSearch from './KeywordSearch';
import TourKit from './TourKit';
import NoticeBoard from './NoticeBoard';
import NoticeBoard1 from './NoticeBoard1';
import BoardDetail from './BoardDetail';
import BoardDetail1 from './BoardDetail1';
import QNA from './QNA';

//header높이 만큼 Main영역 상단에 padding값 적용
const MainContainer=styled.div`
    padding-top: 70px;  
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
                <Route path='/myqna' element={<MyQNA/>}/>
                <Route path='/tourkit' element={<TourKit/>}/>
                <Route path='/sc' element={<ServiceCenter/>}/>
                {/* 검색 결과 페이지 */}
                <Route path='/search' element={<KeywordSearch />}/>
                {/* 공지사항,FAQ 전체페이지 */}
                <Route path='/notice' element={<NoticeBoard/>}/>
                <Route path='/faq' element={<NoticeBoard1/>}/>
                {/* 공지사항,FAQ 상세페이지 */}
                <Route path='/notice/1' element={<BoardDetail/>}/>
                <Route path='/faq/1' element={<BoardDetail1/>}/>
                {/* 1:1 문의 페이지 */}
                <Route path='/qna' element={<QNA/>}/>
            </Routes>
        </MainContainer>
    );
};

export default Main;