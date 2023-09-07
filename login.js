document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Hardcoded username and password (for demonstration)
        const username = 'admin';
        const password = '123';

        // Get user input
        const inputUsername = document.getElementById('username').value;
        const inputPassword = document.getElementById('password').value;

        if (inputUsername === username && inputPassword === password) {
            // Authentication successful
            alert('Login successful!');
            window.open('index.html','_self');
            // You can redirect to another page or perform other actions here
        } else {
            // Authentication failed
            alert('Invalid username or password. Please try again.');
        }

        // Clear form fields
        loginForm.reset();
    });
});
