const managelist = document.querySelector('.managelist'); // managelist button defined
const submit = document.querySelector('.submit'); 
const password = document.getElementById('Password');
const username = document.getElementById('Username');
let login = false;

submit.addEventListener('click', () => {
    if (password.value.length > 8 && username.value.length > 3) {
        login = localStorage.setItem('login', 'true');
    } else {
        login = localStorage.setItem('login', 'false');
    }
})

managelist.addEventListener('click', () => {
    localStorage.getItem('login') === 'true' ?
    window.location.href = 'login.html'
    : window.location.href = 'sign-up.html'
})
