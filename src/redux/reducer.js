import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer({
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
},
{
    addToCart:(state,action)=>{
        const item = action.payload
        const isItemExist = state.cartItems.find(i=>i.id===item.id)
        if(isItemExist){
            state.cartItems.forEach(i=>{
                if(i.id===item.id)
                    i.quantity++;
            })
        }
        else{
            state.cartItems.push(item)
        }
    },

    decrement:(state,action)=>{
        const id = action.payload
        state.cartItems.forEach(i=>{
            if(i.id===id && i.quantity>1){
                i.quantity--;
            }
        })
    },
    deleteFromCart:(state,action)=>{
        state.cartItems = state.cartItems.filter((i)=>i.id !== action.payload)
    },
    calculatePrice:(state)=>{
        let sum = 0;
        state.cartItems.forEach((i)=>(sum+=(i.price*i.quantity)))
        state.subTotal = sum
        state.shipping=0
        if(sum>0)
            state.shipping = state.subTotal > 50000 ? 0 : 2000
        state.tax = +(state.subTotal*0.18).toFixed();
        state.total = state.subTotal + state.tax + state.shipping
    },
})