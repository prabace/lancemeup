import { configureStore } from '@reduxjs/toolkit'
import filterSliceReducer from './slices/filterSlice'
import cartSliceReducer from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        productFilter: filterSliceReducer,
        cartItems: cartSliceReducer,
    },
})