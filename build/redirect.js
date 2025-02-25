const manageList = document.querySelector('.managelist'); // managelist button defined
const submit = document.querySelector('.submit'); 
const password = document.getElementById('Password');
const username = document.getElementById('Username');
const form = document.querySelector('.forms');

// const rememberMe = document.querySelector('.remember-me') //

let login = localStorage.getItem('login') || 'false';
if (form) {
    form.addEventListener('submit', (event) => {
       event.preventDefault();
          if (password.value.length >= 8 && username.value.length > 3) {
             localStorage.setItem('login', 'true');
              form.submit();
              window.location.href = 'List.html';
          } else {
             localStorage.setItem('login', 'false');
          }
})
}
if (manageList) {
    manageList.addEventListener('click', () => {
        if (localStorage.getItem('login') === 'true') {
             window.location.href = 'List.html';
        } else {
            window.location.href = 'sign-up.html';
        }
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
