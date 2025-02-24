const managelist = document.querySelector('.managelist'); // managelist button defined
const submit = document.querySelector('.submit'); 
const password = document.getElementById('Password');
const username = document.getElementById('Username');
// const rememberMe = document.querySelector('.remember-me') //
let login = localStorage.setItem('login', 'false');

submit.addEventListener('click', () => {
    if (password.value.length >= 8 && username.value.length > 3) {
        login = localStorage.setItem('login', 'true');
    } else {
        login = localStorage.setItem('login', 'false');
    }
})
/* rememberMe.addEventListener('click', () => {
    if (password.value.length >= 8 && username.value.length > 3 && submit.addEventListener('click')) {
        localStorage.setItem('rememberUsername', username.value);
        localStorage.setItem('rememberPassword', password.value);
    } else {
        localStorage.clear('rememberUsername');
        localStorage.clear('rememberPassword');
    }
}) 
 window.addEventListener('load', () => {
    const rememberUsername = localStorage.getItem('rememberUsername');
    const rememberPassword = localStorage.getItem('rememberPassword');

    if (rememberUsername && rememberPassword) {
        
    }
}) */

managelist.addEventListener('click', () => {
    if (localStorage.getItem('login') === 'true') {
        window.location.href = 'List.html';
    } else {
        window.location.href = 'sign-up.html';
    }
})
