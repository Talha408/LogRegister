document.addEventListener('DOMContentLoaded', function() {
    const page = document.querySelector('.page-container');
    const formContainer = document.querySelector('.form-container');
    const formSubmission = document.querySelector('.form-submission');

    const column1 = document.createElement('div');
    column1.classList.add('column-1');
    const heading = document.createElement('div');
    heading.classList.add('heading');
    const head = document.createElement('h1');
    head.textContent = "SignUp";

    const column2 = document.createElement('div');
    column2.classList.add('column-2');

    heading.appendChild(head);
    formSubmission.appendChild(heading); // Append the heading to the form

    function createField(holder, logoSrc, pattern, patternDisplay, inputType, fieldName) {
        const fieldcontainer = document.createElement('div');
        fieldcontainer.classList.add('fieldcontainer');

        const field = document.createElement('div');
        field.classList.add('field');

        const logo = document.createElement('img');
        logo.src = logoSrc;
        const input = document.createElement('input');
        input.setAttribute('type', inputType);
        input.setAttribute('placeholder', holder);
        input.setAttribute('name', fieldName); // Set the name attribute
        input.dataset.pattern = pattern; // Store the pattern in a data attribute

        field.appendChild(logo);
        field.appendChild(input);
        fieldcontainer.appendChild(field);

        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = `${patternDisplay}`;
        errorElement.style.display = 'none'; // Initially hidden
        fieldcontainer.appendChild(errorElement);

        input.addEventListener('input', function() {
            if (input.value.match(new RegExp(pattern))) {
                input.style.borderColor = 'initial'; // Reset border color if valid
                errorElement.style.display = 'none'; // Hide error message if valid
            } else {
                input.style.borderColor = 'red'; // Set border color to red if invalid
                errorElement.style.display = 'block'; // Show error message if invalid
            }
        });

        return fieldcontainer;
    }

    const field1 = createField('Your Name', './images-icons/icons8-user-24.png', '.*', 'e.g. John Doe', 'text', 'name');
    column1.appendChild(field1);

    const field2 = createField('Your Email', './images-icons/icons8-email-24.png', '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', 'e.g. john@example.com', 'email', 'email');
    column1.appendChild(field2);

    const field3 = createField('Your Age', './images-icons/icons8-age-24.png', '^[0-9]{1,3}$', 'e.g. 25', 'text', 'age');
    column1.appendChild(field3);

    const field4 = createField('Your Position', './images-icons/icons8-soccer-ball-24.png', '.*', 'e.g. CF,RM,LM', 'text', 'position');
    column1.appendChild(field4);

    const field5 = createField('Jersey No.', './images-icons/icons8-jersey-24.png', '^[0-9]{1,2}$', 'e.g. 10', 'number', 'jersey');
    column2.appendChild(field5);

    const field6 = createField('Rating', './images-icons/icons8-rating-24.png', '^[0-5]$', '0-5', 'number', 'rating');
    column2.appendChild(field6);

    const field7 = createField('Phone No.', './images-icons/icons8-phone-24.png', '^\\+?[0-9]{10,15}$', 'e.g. +1234567890', 'tel', 'phone');
    column2.appendChild(field7);

    const field8 = createField('CNIC', './images-icons/icons8-identification-documents-24.png', '^[0-9]{5}-[0-9]{7}-[0-9]$', 'e.g. 12345-6789012-3', 'text', 'cnic');
    column2.appendChild(field8);

    const columns = document.createElement('div');
    columns.classList.add('columns');
    columns.appendChild(column1);
    columns.appendChild(column2);
    formSubmission.appendChild(columns);

    const submit = document.createElement('div');
    submit.classList.add('submit');

    const checkbtn = document.createElement('input');
    checkbtn.setAttribute('type', 'checkbox');
    checkbtn.setAttribute('id', 'cbtn');

    const label = document.createElement('label');
    label.classList.add('labell');
    label.setAttribute('for', 'cbtn');

    const statement = document.createElement('p');
    statement.innerText = "I agree to all statements in ";

    const spann = document.createElement('span');
    spann.classList.add('sp');
    spann.textContent = "Terms of Service.";

    statement.appendChild(spann);

    label.appendChild(checkbtn);
    label.appendChild(statement);

    submit.appendChild(label);

    const submitButton = document.createElement('input');
    submitButton.classList.add('submitButton');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Register');
    submitButton.setAttribute('id', 'submitButton');

    submit.appendChild(submitButton);
    formSubmission.appendChild(submit);
    formContainer.appendChild(formSubmission);
    page.appendChild(formContainer);

    formSubmission.addEventListener('submit', function(event) {
        let valid = true;
        const inputs = formSubmission.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="number"]');
        inputs.forEach(input => {
            const pattern = new RegExp(input.dataset.pattern);
            if (!pattern.test(input.value)) {
                valid = false;
                input.style.borderColor = 'red';
                const errorElement = input.parentElement.nextSibling;
                if (errorElement) errorElement.style.display = 'block';
            } else {
                input.style.borderColor = 'initial';
                const errorElement = input.parentElement.nextSibling;
                if (errorElement) errorElement.style.display = 'none';
            }
        });
        if (!valid) {
            event.preventDefault();
            alert('Please fill out all fields correctly.');
        }
    });
});
