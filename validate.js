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
    text.innerHTML = 'Enter valid Email using lowercase letter only';
    text.style.color = 'red';
    e.preventDefault();
  }
}

form.addEventListener('submit', validation);