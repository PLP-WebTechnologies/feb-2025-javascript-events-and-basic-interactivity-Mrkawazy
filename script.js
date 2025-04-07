// Select the form and message div
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        showMessage('Please fill in all fields.', 'error');
    } else if (!validateEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
    } else {
        showMessage('Form submitted successfully!', 'success');
        form.reset(); // Reset the form after successful submission
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Function to show messages
function showMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.className = type; // Assign class based on message type
    formMessage.classList.remove('hidden');
}