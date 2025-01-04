//your JS code here. If required.
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const checkbox = document.getElementById('checkbox').checked;

    if (checkbox) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);

    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        document.getElementById('existing').style.display = 'inline';
    }
});

document.getElementById('existing').addEventListener('click', function() {
    const username = localStorage.getItem('username');
    alert(`Logged in as ${username}`);
});

// On page load, check if username and password are stored
window.onload = function() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        document.getElementById('existing').style.display = 'inline';
    }
};
