import { configureStore } from '@reduxjs/toolkit';

import PlaceSlice from './slices/PlaceSlice';

const store = configureStore({
    reducer:{
        place:PlaceSlice

    },
    middleware: (getDefaultNormalizer)=>getDefaultNormalizer({serializableCheck:false}),
    devTools:true
});

export default store;