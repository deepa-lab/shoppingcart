import { createSlice } from '@reduxjs/toolkit'

interface cartType{
  cartProductIds : {
    id: string
  }
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {cartProductIds: [] as cartType[]},
  reducers: {
    addToCart: (state, action) =>{
      
      state.cartProductIds = !state.cartProductIds?.includes(action.payload) ? [action.payload, ...state.cartProductIds] : state.cartProductIds;
    },
    removeFromCart: (state, action) =>{
      const index = state.cartProductIds.indexOf(action.payload);
      state.cartProductIds.splice(index, 1)
    },
    clearAllItems: (state ) =>{
      state.cartProductIds = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearAllItems } = cartSlice.actions

