import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.NombreCliente)) {
    errors.NombreCliente = 'This field is required';
  }
  if (Validator.isEmpty(data.CorreoCliente)) {
    errors.CorreoCliente = 'This field is required';
  }
  if (!Validator.isEmail(data.CorreoCliente)) {
    errors.CorreoCliente = 'Email is invalid';
  }
  if (Validator.isEmpty(data.ClaveCliente)) {
    errors.ClaveCliente = 'This field is required';
  }
  if (Validator.isEmpty(data.ClaveClienteConfirmation)) {
    errors.ClaveClienteConfirmation = 'This field is required';
  }
  if (!Validator.equals(data.ClaveCliente, data.ClaveClienteConfirmation)) {
    errors.ClaveClienteConfirmation = 'Passwords must match';
  }
 

  return {
    errors,
    isValid: isEmpty(errors)
  }
}