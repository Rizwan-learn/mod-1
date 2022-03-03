form.addEventListener('submit', validation);
const data = getFormData();
localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));

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
