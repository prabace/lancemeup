import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    filter: '',
    category: '',
    selectCategory: false
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
        }
     
    }
})

export const { setFilter, setCategory, selectCategory } = filterSlice.actions

export default filterSlice.reducer