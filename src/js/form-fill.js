import { loadFromLS } from './form-localstorage';
import { formData } from './form-data.js';

export const fillFBFormFields = fBForm => {
  const fBFormDataFromLS = loadFromLS('feedback-form-state');

  if (fBFormDataFromLS === null) {
    return;
  }

  Object.assign(formData, fBFormDataFromLS);

  const fBFormDataFromLSKeys = Object.keys(fBFormDataFromLS);

  fBFormDataFromLSKeys.forEach(
    key => (fBForm.elements[key].value = fBFormDataFromLS[key])
  );
};
