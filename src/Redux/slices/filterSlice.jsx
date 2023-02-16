import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    filter: '',
    category: '',
    selectCategory: false,
    range:{
        minPrice: 0,
        maxPrice: 500,
    }
}

export const filterSlice = createSlice({
    name: 'productFilter',
    initialState,
    reducers: {
        setFilter: (state, action)=>{
           state.filter = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        selectCategory: (state, action) => {
            state.selectCategory = action.payload
        },
        setSlider: (state, action) =>{
            state.range = action.payload
        }
     
    }
})

export const { setFilter, setCategory, selectCategory, setSlider } = filterSlice.actions

export default filterSlice.reducer