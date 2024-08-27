import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:"product",
    initialState:{
        product:[],
    },
    reducers:{
        getProducts:(state,action) => {
            state.product.push({...action.payload});
        },
        incrementQty:(state,action) => {
            const itemPresent = state.product.find((item) => item.id === action.payload.id);
            itemPresent.quantity++;
        },
        decrementQty:(state,action) => {
            const itemPresent = state.product.find((item) => item.id === action.payload.id);
            if(itemPresent.quantity == 1){
                itemPresent.quantity = 0;
                const removeItem = state.product.filter((item) => item.id !== action.payload.id);
                state.cart = removeItem;
            }else{
                itemPresent.quantity--;
            }
        }
    }
});

export const {getProducts,incrementQty,decrementQty} = productSlice.actions;

export default productSlice.reducer;





//We need to implement the cart system in such a way that if in case I increment the quantity inside the cart screen so the same quantity should be reflected for that particular product inside my homescreen as well.