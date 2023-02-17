import React from 'react'
import useInputValidation from './useInputValidation'

const usePasswordValidation = () => {
    const password = useInputValidation('')

    const validatePassword = () => {
        if(!password.value){
            password.setError('Password is required*')
        }else if(password.value.length < 8){
            password.setError('Password must be atleast 8 characters*')
        } 
        }
        return{
            ...password,
            validate: validatePassword
        }
    }

    export default usePasswordValidation
