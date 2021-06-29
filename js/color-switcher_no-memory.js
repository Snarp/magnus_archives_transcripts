const darkButton = document.querySelector('#dark-mode-button');
const lightButton = document.querySelector('#light-mode-button');

// Make the toggle button visible in Javascript-enabled browsers.
darkButton.style.display = 'inline';

// ACTIONS
// ------

function toDarkMode() {
    document.querySelector('body').classList.add('dark-mode');
    darkButton.style.display = 'none';
    lightButton.style.display = 'inline';
}
function toLightMode() {
    document.querySelector('body').classList.remove('dark-mode');
    lightButton.style.display = 'none';
    darkButton.style.display = 'inline';
}
