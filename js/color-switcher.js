// const body = document.querySelector('body');
const darkButton = document.querySelector('#dark-mode-button');
const lightButton = document.querySelector('#light-mode-button');
darkButton.style.display = 'inline';

function toDarkMode() {
    body = document.querySelector('body');
    body.classList.add('dark-mode');
    // darkButton = document.querySelector('#dark-mode');
    darkButton.style.display = 'none';
    // lightButton = document.querySelector('#light-mode');
    lightButton.style.display = 'inline';
}
function toLightMode() {
    body = document.querySelector('body');
    body.classList.remove('dark-mode');
    // lightButton = document.querySelector('#light-mode');
    lightButton.style.display = 'none';
    // darkButton = document.querySelector('#dark-mode');
    darkButton.style.display = 'inline';
}


// buttons.forEach(function(button){
//     button.addEventListener('click', function(e){
//         console.log(e.target);
//         if (e.target.id === 'grey'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'white'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'blue'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'yellow'){
//             body.style.backgroundColor = e.target.id;
//         }
//     })
// })