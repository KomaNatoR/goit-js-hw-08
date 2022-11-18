import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  mailEl: document.querySelector('[name="email"]'),
  textEl: document.querySelector('[name="message"]'),
}; 
// console.log(refs.textEl);

const KYE_FROM_DATAOBJECT = "feedback-form-state";
let formData = {};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onInputSaveData, 500));

if (localStorage.getItem(KYE_FROM_DATAOBJECT)) {
  formData = JSON.parse(localStorage.getItem(KYE_FROM_DATAOBJECT));
  refs.mailEl.value = formData.email;
  refs.textEl.value = formData.message;
}

function onInputSaveData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(KYE_FROM_DATAOBJECT, JSON.stringify(formData));

    console.dir(formData);
}
function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(KYE_FROM_DATAOBJECT);
}
