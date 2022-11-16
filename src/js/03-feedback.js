import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('submit', onFormSumbit);
refs.form.addEventListener('input', throttle(onInput, 500));

const STORAGE_EMAIL_KEY = 'email';
const STORAGE_MESSAGE_KEY = 'message';

getLocalStorageItems();

function onFormSumbit(e) {
  e.preventDefault();
  consoleFormData(e.currentTarget);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_EMAIL_KEY);
  localStorage.removeItem(STORAGE_MESSAGE_KEY);
}

function onInput(e) {
  if (e.target.name === 'email')
    localStorage.setItem(STORAGE_EMAIL_KEY, e.target.value);
  if (e.target.name === 'message')
    localStorage.setItem(STORAGE_MESSAGE_KEY, e.target.value);
}

function getLocalStorageItems(props) {
  if (localStorage.getItem(STORAGE_EMAIL_KEY)) {
    refs.email.value = localStorage.getItem(STORAGE_EMAIL_KEY);
  }
  if (localStorage.getItem(STORAGE_MESSAGE_KEY)) {
    refs.message.value = localStorage.getItem(STORAGE_MESSAGE_KEY);
  }
}

function consoleFormData(form) {
  const feedbackData = {};
  new FormData(form).forEach((value, key) => (feedbackData[key] = value));
  console.log('feedbackData', feedbackData);
}