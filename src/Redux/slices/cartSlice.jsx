import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cart:[],
}

export const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        setCartItems: (state, action)=>{
           state.cart = action.payload
        },
        
    }
})

export const { setCartItems } = cartSlice.actions

export default cartSlice.reducer