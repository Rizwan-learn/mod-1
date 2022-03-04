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
};

const contactForm = document.querySelector("#form");
const fullName = document.querySelector("#name");
const emailAddress = document.querySelector("#email");
const message = document.querySelector("#textArea");

function dataStorage() {
  const user = {
    userFullName: fullName.value,
    userEmail: emailAddress.value,
    userMessage: message.value,
  };

  localStorage.setItem("userData", JSON.stringify(user));
}

contactForm.addEventListener("focusout", dataStorage);

const userDataObject = JSON.parse(localStorage.getItem("userData"));

fullName.value = userDataObject.userFullName;
emailAddress.value = userDataObject.userEmail;
message.value = userDataObject.userMessage;