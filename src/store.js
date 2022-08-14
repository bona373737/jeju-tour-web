/** 
 * @Filename: store.js
 * @Author: 구나래(nrggrnngg@gmail.com), 구본아(bona373737@gmail.com)
 * @Description: redux 상태값 저장소
 */
import { configureStore } from '@reduxjs/toolkit';

import PlaceSlice from './slices/PlaceSlice';
import AccomSlice from './slices/AccomSlice';
import FoodSlice from './slices/FoodSlice';
import SearchSlice from './slices/SearchSlice';
import NoticeSlice from './slices/NoticeSlice';
import FAQSlice from './slices/FAQSlice';
import MyLikeSlice from './slices/MyLikeSlice';
import MemberSlice from './slices/MemberSlice';

const store = configureStore({
    reducer:{
        place: PlaceSlice,
        accom: AccomSlice,
        food: FoodSlice,
        search: SearchSlice,
        notice: NoticeSlice,
        faq: FAQSlice,
        myLike : MyLikeSlice,
        member: MemberSlice
    },
    middleware: getDefaultNormalizer => getDefaultNormalizer({serializableCheck:false}),
    devTools:true
});

export default store;