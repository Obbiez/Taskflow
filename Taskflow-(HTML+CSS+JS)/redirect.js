const managelist = document.getElementsByClassName('managelist'); // managelist button defined
let redirect = localStorage.getItem('login');

managelist.AddEventListener('click', () => {
    redirect === 'login' ?
    window.location.href = 'login.html'
    : window.location.href = 'sign-up.html'
})