import { configureStore } from '@reduxjs/toolkit';

import SearchSlice from './slices/SearchSlice';
import PlaceSlice from './slices/PlaceSlice';
import AccomSlice from './slices/AccomSlice';
import FoodSlice from './slices/FoodSlice';

const store = configureStore({
    reducer:{
        place:PlaceSlice,
        accom:AccomSlice,
        food:FoodSlice,
        search: SearchSlice,
    },
    middleware: (getDefaultNormalizer)=>getDefaultNormalizer({serializableCheck:false}),
    devTools:true
});

export default store;