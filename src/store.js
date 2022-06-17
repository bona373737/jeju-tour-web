import { configureStore } from '@reduxjs/toolkit';

import SearchSlice from './slices/SearchSlice';

const store = configureStore({
    reducer:{
        search: SearchSlice,
    },
    middleware: (getDefaultNormalizer)=>getDefaultNormalizer({serializableCheck:false}),
    devTools:true
});

export default store;