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
            
            //filter method will be used here to filter the items in the cart based on the ID of the item inside the cart
            
            {
                //we will be filtering based on ID i.e if the item.id is not equal to the action.payload.id then that particular item is removed from the cart

                const removeItem = state.cart.filter((item)=> item.id !== action.payload.id)
                state.cart = removeItem
            },
            incrementQuantity:(state, action) => {
                // again we are gonna check if the item is already present in the cart
                //this will be applied on the + button since the function is increment
                const itemPresent = state.cart.find((item)=>item.id === action.payload.id);
                itemPresent.quantity++;
            },
            decrementQuantity:(state,action)=>{
                //we are gonna again check if the item is already present so decrement quantity is applied on the
                //minus button *
                const itemPresent = state.cart.find((item)=>item.id === action.payload.id);
                if(itemPresent.quantity === 1) {
                    itemPresent.quantity = 0;
                    const removeItem = state.cart.filter((item)=> item.id !== action.payload.id)
                    state.cart = removeItem;
                }
                else{
                        //quantity is more than 1
                        itemPresent.quantity--;
                    }
                }

            }

})

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} = CartSlice.actions;

export default CartSlice.reducer;


//if the user presses on the addtocart button for the first time
//then we need to push those particular details into the cart like
// the description, image, price etc

//so if the item is already present inside the cart that means if the
// quantity is 1 then in that case we are just going to increase the
// quanity of that particular item by 1


//* so if the quantity of that particular item is one & if the user presses presses on the minus button then we should just remove that item from the cart and we should again show this Add Button UI again.
//So in case if the quantity of that particular item is more than 1 like 2,5,10 then in that case if the user presses on the minus button the quantity should be decreased by 1 only