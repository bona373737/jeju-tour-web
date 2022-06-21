import { configureStore } from '@reduxjs/toolkit';

import PlaceSlice from './slices/PlaceSlice';
import SearchSlice from './slices/SearchSlice';

const store = configureStore({
    reducer:{
        place:PlaceSlice,
        search: SearchSlice,
    },
    middleware: (getDefaultNormalizer)=>getDefaultNormalizer({serializableCheck:false}),
    devTools:true
});

export default store;