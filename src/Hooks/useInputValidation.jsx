import React from 'react'
import {useState} from 'react'

const useInputValidation = initialValue =>{
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState('')
    const [valid, setValid] = useState('')

    const handleChange = event => {
        setValue(event.target.value)
        setError('')
        setValid('')
    }

    return{
        value,
        error,
        valid,
        onChange: handleChange,
        setError,
        setValid
    }
}   

export default useInputValidation