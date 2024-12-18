document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Helper function to set error messages
    function setError(fieldId, message) {
        const errorElement = document.getElementById(fieldId + 'Error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        isValid = false;
    }

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    // Validate first name
    const firstName = document.getElementById('firstName').value.trim();
    if (firstName === '') setError('firstName', 'First name is required.');

    // Validate last name
    const lastName = document.getElementById('lastName').value.trim();
    if (lastName === '') setError('lastName', 'Last name is required.');

    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) setError('email', 'Invalid email address.');

    // Validate phone number
    const phone = document.getElementById('phone').value.trim();
    if (!/^\d{10}$/.test(phone)) setError('phone', 'Phone number must be 10 digits.');

    // Validate gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) setError('gender', 'Please select your gender.');

    // Validate father's name
    const fatherName = document.getElementById('fatherName').value.trim();
    if (fatherName === '') setError('fatherName', 'Father\'s name is required.');

    // Validate mother's name
    const motherName = document.getElementById('motherName').value.trim();
    if (motherName === '') setError('motherName', 'Mother\'s name is required.');

    // Validate qualification
    const qualification = document.getElementById('qualification').value;
    if (qualification === '') setError('qualification', 'Please select a qualification.');

    // Validate photo upload
    const photo = document.getElementById('photo').files[0];
    if (!photo) setError('photo', 'Please upload a photo.');

    // Submit form if valid
    if (isValid) {
        alert('Registration successful!');
        this.reset(); // Reset the form
    }
});
