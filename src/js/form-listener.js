import { formData } from './form-data.js';
import { saveToLS } from './form-localstorage.js';

export const handleChangeFBForm = ({ target: fBFormField }) => {
  try {
    const fBFormFieldValue = fBFormField.value.trim();
    const fBFormFieldName = fBFormField.name;

    formData[fBFormFieldName] = fBFormFieldValue;

    saveToLS('feedback-form-state', formData);
  } catch (err) {
    console.log(err);
  }
};

export const onFBFormSubmit = e => {
  e.preventDefault();
  const { email, message } = formData;

  if (!email || !message) {
    alert('Заполните оба поля формы!');
    return;
  }
  console.log({ email, message });
  localStorage.removeItem('feedback-form-state');
  e.target.reset();

  Object.keys(formData).forEach(key => (formData[key] = ''));
};
