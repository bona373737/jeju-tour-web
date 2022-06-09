import { configureStore } from '@reduxjs/toolkit';
import { getDefaultNormalizer } from '@testing-library/react';

const store = configureStore({
    reducer:{

    },
    middleware: (getDefaultNormalizer)=>getDefaultNormalizer({serializableCheck:false}),
    devTools:true
});

export default store;