import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../components/Home';
import Tab from './Tab';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home/>}>
                    
                </Route>
                <Route path='/tab/:place' element={<Tab/>}/>
                <Route path='/tab/:accom' element={<Tab/>}/>
                <Route path='/tab/:food' element={<Tab/>}/>

            </Routes>
        </div>
    );
};

export default Main;