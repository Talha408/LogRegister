const pageContainer = document.querySelector('.page-container');
const formContainer = document.querySelector('.form-container');
const formSubmission = document.querySelector('.form-submission'); // This is already a form element

const heading = document.createElement('div');
heading.classList.add('heading');
const head = document.createElement('h1');
head.textContent = "Login";

heading.appendChild(head);

const fields = document.createElement('div');
fields.classList.add('fields');

function fieldfunc(inputLogo, inputType, inputPlaceholder, inputName, inputPattern) {
    const fieldcontainer = document.createElement('div');
    fieldcontainer.classList.add('fieldcontainer');

    const field = document.createElement('div');
    field.classList.add('field');

    const Input = document.createElement('input');
    Input.classList.add('inp');
    Input.setAttribute('type', inputType);
    Input.setAttribute('placeholder', inputPlaceholder);
    Input.setAttribute('name', inputName);
    Input.setAttribute('pattern', inputPattern);
    Input.required = true; // Make the field required

    const Icons = document.createElement('img');
    Icons.src = inputLogo;

    field.appendChild(Icons);
    field.appendChild(Input);
    fieldcontainer.appendChild(field);

    return fieldcontainer;
}

const field1 = fieldfunc("./images/icons8-email-24.png", "email", "Your Email", "email", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
fields.appendChild(field1);

const field2 = fieldfunc("./images/icons8-password-24.png", "password", "Your Password", "password", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
fields.appendChild(field2);

const logSection = document.createElement('div');
logSection.classList.add('logsection');
const loginBtn = document.createElement('input');
loginBtn.classList.add('btn');
loginBtn.setAttribute("type", "submit");
loginBtn.setAttribute("value", "Login");

logSection.appendChild(loginBtn);

formSubmission.appendChild(heading);
formSubmission.appendChild(fields);
formSubmission.appendChild(logSection);
formContainer.appendChild(formSubmission);
pageContainer.appendChild(formContainer);

// Form validation and submission handling
formSubmission.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    const emailField = formSubmission.querySelector('input[name="email"]');
    const passwordField = formSubmission.querySelector('input[name="password"]');

    // Check if fields are empty or invalid
    if (!emailField.value || !passwordField.value || !emailField.checkValidity() || !passwordField.checkValidity()) {
        alert('Please fill all the fields correctly.');
    } else {
        // If valid, submit the form
        formSubmission.submit();
    }
});


