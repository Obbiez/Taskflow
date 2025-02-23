let lightmode = localStorage.getItem('lightmode'); // sees if theres lightmode stored
const themeSwitch = document.getElementById('theme-switch'); // button

const enableLightmode = () => {
    document.body.classList.add('lightmode'); // html file . body div . class . add (class=lightmode)
    localStorage.setItem('lightmode', 'active'); // adds lightmode and sets it to active in local storage
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode'); // html file. body div. class . remove (class=lightmode)
    localStorage.setItem('lightmode', null); // sets lightmode to disabled in local storage
}

if (lightmode === 'active') {
    enableLightmode();
}

themeSwitch.addEventListener("click", () => { // listens for click event on button
    lightmode = localStorage.getItem('lightmode'); // gets the value of light mode from local storage and sets lightmode to that value
    lightmode !== 'active' ? enableLightmode() : disableLightmode(); // if lightmode is not active then enable light mode if not disable light mode 
})