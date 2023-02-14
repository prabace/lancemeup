import useInputValidation from './useInputValidation'

const useNameValidation = () => {
    const name = useInputValidation('')

    const validateName = () => {
        if(!name.value){
            name.setError('Name is required*')
        }else if (name.value.length < 3){
            name.setError('Name must be atleast 3 characters*')
        }
        else{
           name.setValid('Name is valid')
        }
    }

    return{
        ...name,
        validate: validateName
    }
}

export default useNameValidation