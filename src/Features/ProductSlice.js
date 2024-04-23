import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
export const productSlice=createSlice ({
    name:"user",
    initialState:{
    data:[],
    loading:false,
    error:false,
    cartvalue:[],
    quantity:0,
    },

    
    reducers:{ 
     addtocart:(state,action)=>{
      const existingItem =state.cartvalue.findIndex(item=>item.id===action.payload.id);
      if(existingItem!==-1){
        state.cartvalue[existingItem].quantity +=1;
      }
      else{
        state.cartvalue.push({...action.payload ,quantity:1});
      }
      state.quantity+=1;
     },

    
     removecart:(state,action)=>{
      const removeItem=state.cartvalue.find(item=>item.id===action.payload);
      if(removeItem){
       state.quantity-=removeItem.quantity;
       state.cartvalue=state.cartvalue.filter((item)=>item.id!==action.payload);
      }
      
     },

    incrementquantity:(state,action)=>{
      const itemIndex =state.cartvalue.findIndex(item=>item.id===action.payload);
      if(itemIndex!==-1){
       state.cartvalue[itemIndex].quantity+=1;
       state.quantity+=1;
      }
     },
     decrementquantity:(state,action)=>{
      const itemIndex =state.cartvalue.findIndex(item=>item.id===action.payload);
      if(itemIndex!==-1 && state.cartvalue[itemIndex].quantity>1){
        state.cartvalue[itemIndex].quantity-=1
      }
      else{
      
          // If quantity is 1 or less, remove the item from cart
          state.quantity -= state.cartvalue[itemIndex].quantity;
          state.cartvalue.splice(itemIndex, 1);
      
      }
     },
     clearAll:(state,action)=>{
      state.cartvalue=[];
      state.quantity=0;
     }
    },
   extraReducers:(builder)=>{
   builder
  .addCase(getProducts.pending,(state)=>{
    state.loading=true;
    })
  .addCase(getProducts.fulfilled,(state,action)=>{
    state.loading=false;
    state.data=action.payload;
  })
  .addCase(getProducts.rejected,(state)=>{
    state.loading=false;
    state.error=true;
  })
}
}
);
export const getProducts=createAsyncThunk("fetchapi",async()=>{
  const data=await fetch("https://fakestoreapi.com/products")
  return data.json();
})
export const {addtocart,removecart,incrementquantity,decrementquantity,clearAll} = productSlice.actions;
export  default productSlice.reducer;
