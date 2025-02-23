const managelist = document.getElementsByClassName('managelist'); // managelist button defined

const submit = document.getElementsByClassName('submit'); 
const password = document.getElementById('Password');
const username = document.getElementById('Username');

let login = false;

loggedIn.AddEventListener('click', () => {
    if (console.log(length.password) < 8 && console.log(length.username < 3)) {
        login = true;
    } else {
        login = false;
    }
})

let redirect = localStorage.getItem('login');

managelist.AddEventListener('click', () => {
    redirect === 'login' ?
    window.location.href = 'login.html'
    : window.location.href = 'sign-up.html'
})
