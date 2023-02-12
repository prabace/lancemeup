import React from 'react'
import {useState} from 'react'

const useInputValidation = initialValue =>{
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState('')

    const handleChange = event => {
        setValue(event.target.value)
        setError('')
    }

    return{
        value,
        error,
        onChange: handleChange,
        setError
    }
}   

export default useInputValidation