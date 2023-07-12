import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducer";
import { data } from "./data";

const store = configureStore({
    reducer:{
        cart:cartReducer,
        data:data,
    }
})

export default store