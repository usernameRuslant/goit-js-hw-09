import { refs } from './refs.js';
import { fillFBFormFields } from './form-fill.js';
import { handleChangeFBForm, onFBFormSubmit } from './form-listener.js';

fillFBFormFields(refs.fBForm);

refs.fBForm.addEventListener('input', handleChangeFBForm);
refs.fBForm.addEventListener('submit', onFBFormSubmit);
