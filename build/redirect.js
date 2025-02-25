const managelist = document.querySelector('.managelist'); // managelist button defined
const submit = document.querySelector('.submit'); 
const password = document.getElementById('Password');
const username = document.getElementById('Username');
const form = document.querySelector('.forms');
const logOut = document.querySelector('#log-out');
const lists = document.querySelector('#lists');
const schedules = document.querySelector('#schedules');
// const rememberMe = document.querySelector('.remember-me') //

let login = localStorage.getItem('login') || 'false';

if (localStorage.getItem('login') === null) {
    localStorage.setItem('login', 'false'); // Set default login value
}

if (form) {
    submit.addEventListener('click', (event) => {
           event.preventDefault();
          if (password.value.length >= 8 && username.value.length > 3) {
              localStorage.setItem('login', 'true');
              window.location.href = 'List.html';
              console.log('works');
          } else {
              localStorage.setItem('login', 'false');
          }
})
}
// TO ADD - LET USER KNOW PASSWORD / USERNAME WRONG
if (managelist) {
    managelist.addEventListener('click', () => {
        if (localStorage.getItem('login') === 'true') {
             window.location.href = 'List.html';
        } else {
            window.location.href = 'sign-up.html';
        }
    });
}
if (localStorage.getItem('login') === 'false') {
    if (lists) lists.classList.add('hide');
    if (schedules) schedules.classList.add('hide');
    if (logOut) logOut.classList.add('hide');
} else {
    if (lists) lists.classList.remove('hide');
    if (schedules) schedules.classList.remove('hide');
    if (logOut) logOut.classList.remove('hide');
}


if (logOut) {
    logOut.addEventListener('click', () => {
        localStorage.setItem('login', 'false');
    });
}

/* rememberMe.addEventListener('click', () => {
    if (password.value.length >= 8 && username.value.length > 3 && submit.addEventListener('click')) {
        localStorage.setItem('rememberUsername', username.value);
        localStorage.setItem('rememberPassword', password.value);
    } else {
        localStorage.removeItem('rememberUsername');
        localStorage.removeItem('rememberPassword');
    }
}) 
 window.addEventListener('load', () => {
    const rememberUsername = localStorage.getItem('rememberUsername');
    const rememberPassword = localStorage.getItem('rememberPassword');

    if (rememberUsername && rememberPassword) {
        
    }
}) */
