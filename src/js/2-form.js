const formSection = document.querySelector('.form-section');

const sectionHeader = document.createElement('h1');
sectionHeader.classList.add('title');
sectionHeader.textContent = 'FEEDBACK';

formSection.appendChild(sectionHeader);

const form = document.createElement('form');
form.classList.add('form');
form.setAttribute('autocomplete', 'off');

const formLabel = document.createElement('label');
formLabel.textContent = 'Email';

const emailInput = document.createElement('input');
emailInput.classList.add('email-input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('autofocus', '');
emailInput.setAttribute('placeholder', 'Type area');

formLabel.appendChild(emailInput);
form.appendChild(formLabel);

const messageLabel = document.createElement('label');
messageLabel.textContent = 'Message';

const messageText = document.createElement('textarea');
messageText.setAttribute('name', 'message');
messageText.setAttribute('rows', '8');

messageLabel.appendChild(messageText);
form.appendChild(messageLabel);

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);

formSection.appendChild(form);

function updateForm() {
  const formData = {
    email: form.querySelector('input[name="email"]').value.trim(),
    message: form.querySelector('textarea[name="message"]').value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', e => {
  if (e.target.matches('input[name="email"], textarea[name="message"]')) {
    updateForm();
  }
});

function clearForm() {
  localStorage.removeItem('feedback-form-state');
  form.querySelector('input[name="email"]').value = '';
  form.querySelector('textarea[name="message"]').value = '';
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailValue = form.querySelector('input[name="email"]').value.trim();
  const messageValue = form
    .querySelector('textarea[name="message"]')
    .value.trim();

  if (!emailValue || !messageValue) {
    alert('Please fill all fields');
    return;
  }

  const formData = {
    email: emailValue,
    message: messageValue,
  };

  console.log(formData);

  clearForm();
});

document.addEventListener('DOMContentLoaded', () => {
  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const formData = JSON.parse(savedFormData);

    if (formData.email !== undefined) {
      form.querySelector('input[name="email"]').value = formData.email;
    }

    if (formData.message !== undefined) {
      form.querySelector('textarea[name="message"]').value = formData.message;
    }
  }
});
