import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   user:{
    email:'',
    password:''
},
   admin:'',
   isLoggedIn: false,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser: (state, action)=>{
            console.log(action.payload)
           state.user.email= action.payload.email
           state.user.password= action.payload.password
     
    },
    setAdmin: (state, action)=>{
        console.log(action.payload)
        state.admin= action.payload
  
 },
 setIsLoggedIn: (state, action)=>{
    console.log(action.payload)
    state.isLoggedIn= action.payload

},
}
})

export const {setUser, setAdmin, setIsLoggedIn } = userSlice.actions

export default userSlice.reducer