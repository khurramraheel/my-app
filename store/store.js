import {configureStore }  from '@reduxjs/toolkit';
import { userData } from './userReducer';


export let meraStore = configureStore({
    // data-section
    reducer:{
        userData
    }
});

