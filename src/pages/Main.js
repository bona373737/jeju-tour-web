import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './Home';
import Tab from './Tab';
import ListDetail from '../components/ListDetail';
import CardDetail from '../components/CardDetail';
import Login from '../components/Login'
import Signup from './Signup';

const Main = () => {
    return (
        <div>
            <Routes>
                {/*메인화면 */}
                <Route path="/" exact element={<Home/>}/>
                <Route path='/place' element={<Tab/>}/>
                <Route path='/accom' element={<Tab/>}/>
                <Route path='/food' element={<Tab/>}/>
                {/* 여행컨텐츠 상세페이지 */}
                <Route path='/magazine/:id' element={<CardDetail/>}/>
                {/* 관광지,숙박,음식 상세페이지 */}
                <Route path='/place/:id' element={<ListDetail/>}/>
                <Route path='/accom/:id' element={<ListDetail/>}/>
                <Route path='/food/:id' element={<ListDetail/>}/>
                {/* 로그임,회원가입 페이지 */}
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </div>
    );
};

export default Main;