let users = [];

// Function to generate a random 16-byte token
function generateToken() {
    return [...Array(10)].map(() => Math.floor(Math.random() * 256).toString(10).padStart(2, '0')).join('');
}

// Function to handle form submission
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Display error message if any field is empty
    const genericError = document.getElementById('genericError');

    if (!name || !email || !password || !confirmPassword) {
        genericError.style.display = 'block';
        return;
    }

    // Reset the generic error message
    genericError.style.display = 'none';

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Simulated backend action: save user data
    const token = generateToken();
    users.push({ name, email, token, password });

    // Redirect to profile page and pass user data
    localStorage.setItem('currentUser', JSON.stringify({ name, email, token, password }));
    window.location.href = './profile.html';
}


const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const currentPage = window.location.pathname;

if (!currentUser && currentPage !== '/index.html') {
    // Redirect to the signup page only if there's no user data and it's not already the signup page
    window.location.href = './index.html';
} else if (currentUser) {
    document.addEventListener('DOMContentLoaded', function () {
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        const profileToken = document.getElementById('profileToken');
        const profilePassword = document.getElementById('profilePassword');

        if (profileName && profileEmail && profileToken) {
            profileName.innerText = currentUser.name;
            profileEmail.innerText = currentUser.email;
            profileToken.innerText = currentUser.token;
            profilePassword.innerText = currentUser.password;
        }
    });
}


// Function to handle logout
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html'; // Redirect to signup page after logout
}
