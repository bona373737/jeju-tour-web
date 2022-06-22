import { configureStore } from '@reduxjs/toolkit';

import TabSlice from './slices/TabSlice';
import SearchSlice from './slices/SearchSlice';

const store = configureStore({
    reducer:{
        tab:TabSlice,
        search: SearchSlice,
    },
    middleware: (getDefaultNormalizer)=>getDefaultNormalizer({serializableCheck:false}),
    devTools:true
});

export default store;