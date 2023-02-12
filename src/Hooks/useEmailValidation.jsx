import React from 'react';
import useInputValidation from './useInputValidation'

const useEmailValidation =() =>{
    const email = useInputValidation('');


const validateEmail = () => {
    if(!email.value){
        email.setError('Email is required')
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.value)){
        email.setError('Invalid email address')
    }
}

return{
    ...email,
    validate: validateEmail 
}
}

export default useEmailValidation