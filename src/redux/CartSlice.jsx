import { createSlice } from "@reduxjs/toolkit"


const CartSlice = createSlice({
name: 'Cartlist',
initialState:[],
reducers:{
    Addtocart(state ,action){
        state.push(action.payload)
    },
   Removetocart(state, action){
    return state.filter((item)=> 
    item.id !== action.payload );
   },
   IncreaseQuantity(state, action){
         const id = action.payload;
      const existingItem = state.find((i) => i.id === id);
      if (existingItem) {
        existingItem.quantity++;
      }
    },

   DecreaseQuantity(state, action){
    const id = action.payload;
    const existingItem = state.find((i) => i.id === id);
    if (existingItem) {
      existingItem.quantity--;
    }
   },

   ClearCart() {  // Function to remove all items from the cart
    return [];
}

}

})
export const {Addtocart, Removetocart,DecreaseQuantity, IncreaseQuantity,ClearCart}=CartSlice.actions
export default CartSlice.reducer