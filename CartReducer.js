import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action) =>{
            //If this condition is true then it means that the item is already present in the cart
            const itemPresent = state.cart.find((item)=>item.id === action.payload.id)
            if(itemPresent){
                itemPresent.quantity++;
                //if the item is not present and the user presses on add button for the first time then
                //we should push all of the details like image,name,price etc into the cart
            }else{
                //we are gonna initi the quantity to be 1 of that particular product since the product 
                // has not been added to the cart, the particular item will be pushed & we will
                //include the quantity of that particular item by 1
                state.cart.push({...action.payload,quantity:1})
            }},
            removeFromCart:(state,action) =>
            
            //filter method will be used here to filter the items in the cart based on the ID of the item
            //inside the cart
            
            {

            }
}
})

//if the user presses on the addtocart button for the first time
//then we need to push those particular details into the cart like
// the description, image, price etc

//so if the item is already present inside the cart that means if the
// quantity is 1 then in that case we are just going to increase the
// quanity of that particular item by 1