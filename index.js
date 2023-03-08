const hiddenOption = document.getElementById('hiddenOption');
const close = document.querySelector('.content');
const body = document.querySelector('body');
const swap = document.getElementById('switchLightDarkText');
const profileMenu = document.getElementById('profileMenu');



close.addEventListener('click', (e) => {
    const event = e.srcElement.className;
    if (event === 'content' || event === 'navbar' || event === 'centerDiv') {
        if (hiddenOption.classList.contains('show')) {
            btnToggle();
        }
        if (profileMenu.classList.contains('profileShow')) {
            btnProfile();
        }
    }
});

function btnToggle() {
    if (profileMenu.classList.contains('profileShow')) {
        btnProfile();
    }
    hiddenOption.classList.toggle('show');
};

function dark() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    body.classList.toggle('darkMode');
    if (prefersDarkScheme.matches) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }

    // hiddenOption.classList.toggle('darkModeSubMenu');
    if (swap.innerHTML === 'Light') {
        swap.innerHTML = 'Dark';
    } else {
        swap.innerHTML = 'Light';
    }
};

function btnProfile() {
    if (hiddenOption.classList.contains('show')) {
        btnToggle();
    }
    profileMenu.classList.toggle('profileShow');
};

