import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
    let errors={};

    if(validator.isEmpty(data.CorreoCliente)){
        errors.CorreoCliente='This field is required';
    }
    if(validator.isEmpty(data.ClaveCliente)){
        errors.ClaveCliente='This field is required'
    }
    return{


        errors,
        isValid: isEmpty(errors)
    }
}