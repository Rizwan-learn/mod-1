const formId = 'form';
const url = location.href;
const formIdentifier = `${url} ${formId}`;
const saveButton = document.querySelector('#submitButton');
const form = document.querySelector(`#${formId}`);
const formElements = form.elements;

const getFormData = () => {
  const data = { [formIdentifier]: {} };
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formIdentifier][element.name] = element.value;
    }
  }
  return data;
};

saveButton.onclick = (event) => {
  const form = document.getElementById('form');
  function validation(e) {
    const email = document.getElementById('email').value;

    const text = document.getElementById('text');
    const pattern = /^([a-z0-9._]+)@([a-z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if (email.match(pattern)) {
      form.classList.add('valid');
      form.classList.remove('invalid');
      text.innerHTML = 'Your Email Address is valid';
      text.style.color = 'green';
    } else {
      text.innerHTML = 'Enter valid Email using small letter only';
      text.style.color = 'red';
      e.preventDefault();
    }
  }

  form.addEventListener('submit', validation);
  const data = getFormData();
  localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
};

const populateForm = () => {
  if (localStorage.key(formIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem(formIdentifier));
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};

document.onload = populateForm();
