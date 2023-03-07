const hiddenOption = document.getElementById('hiddenOption');
const toggleOn = document.querySelector('toggleon');
const toggleOff = document.querySelector('toggleoff');
const body = document.querySelector('.content');

body.addEventListener('click', (e) => {
    const event = e.srcElement.className;
    if (event === 'content' || event === 'navbar' || event === 'centerDiv') {
        if (hiddenOption.classList.contains('show')) {
            btnToggle();
        }
    }
})

function btnToggle() {
    hiddenOption.classList.toggle('show');
}



// toggleOn.addEventListener('click', () => {
//     for (let i = 0; i > toggleOn.length; i++) {
//         let item = toggleOn[i];
//         item.style.display = 'none';
//     }
//     for (let i = 0; i > toggleOff.length; i++) {
//         let item = toggleOff[i];
//         item.style.display = 'block';
//     }
// })
// toggleOff.addEventListener('click', () => {
//     for (let i = 0; i > toggleOn.length; i++) {
//         let item = toggleOn[i];
//         item.style.display = 'block';
//     }
//     for (let i = 0; i > toggleOff.length; i++) {
//         let item = toggleOff[i];
//         item.style.display = 'none';
//     }
// });

