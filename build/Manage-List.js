const getStarted = document.querySelector('.managelist');
let isLoggedIn = true;
let rememberMe = true;

getStarted.addEventListener('click', () => {
    if (isLoggedIn === true && rememberMe === true) {
        window.location.href = 'List.html';
    } else {
        window.location.href = 'sign-up.html';
    }
})