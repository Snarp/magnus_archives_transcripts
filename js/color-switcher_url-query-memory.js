const darkButton = document.querySelector('#dark-mode-button');
const lightButton = document.querySelector('#light-mode-button');

const localLinks = gatherLocalLinks();

// Make the toggle button visible in Javascript-enabled browsers.
darkButton.style.display = 'inline';

// Check URL for `?mode=dark` and activate dark mode if present.
if (currentUrlIsDark()) { toDarkMode(); }


// ACTIONS
// ------

function toDarkMode() {
    document.querySelector('body').classList.add('dark-mode');
    darkButton.style.display = 'none';
    lightButton.style.display = 'inline';
    setCurrentUrlMode('dark');
}
function toLightMode() {
    document.querySelector('body').classList.remove('dark-mode');
    lightButton.style.display = 'none';
    darkButton.style.display = 'inline';
    setCurrentUrlMode('light');
}

function setCurrentUrlMode(mode) {
    var oldUrl = window.location.href;
    var newUrl = setUrlMode(oldUrl, mode);
    if (newUrl!=oldUrl) { setCurrentUrl(newUrl); }
    return newUrl;
}

function setLocalLinkModes(mode) {
    for (const link of localLinks) {
        var oldUrl = link.getAttribute('href');
        var newUrl = setUrlMode(oldUrl, mode);
        if (oldUrl!=newUrl) {
            link.setAttribute('href', newUrl);
        }
    }
}



// PARSING
// ------

function currentUrlIsDark() {
    var args = new URLSearchParams(window.location.search);
    return (args.get('mode')=='dark');
}

function gatherLocalLinks() {
    var allLinks = document.querySelectorAll('a[href]');
    var localLinks = [];
    for (const link of allLinks) {
        if (isLocalURL(link.getAttribute('href'))) {
            localLinks.push(link);
        }
    }
    return localLinks;
}



// HELPERS
// ------

function setCurrentUrl(url) {
    if (window.location.href==url) { return false; }
    window.history.pushState({}, null, url);
}

// // NOTE: Breaks for relative URLs, which is most of them.
// function setUrlMode(url, mode) {
//     var uri = new URL(url);
//     if (mode=='dark') { uri.searchParams.set('mode','dark');
//     } else { uri.searchParams.delete('mode'); }
//     return uri.href;
// }
function setUrlMode(oldUrl, mode) {
    var arr = oldUrl.split('?');
    var newUrl = arr[0];
    var args = new URLSearchParams(arr[1]);
    if (mode=='dark') {
        args.set('mode', mode)
    } else {
        args.delete('mode');
    }
    var query = args.toString();
    if (query=='') { 
        return newUrl;
    } else { 
        return newUrl + '?' + query; 
    }
}

function isLocalURL(url) {
    try {
        if (url[0]=='/' || url=='') { 
            return true; 
        } else {
            var uri = new URL(url);
            return (uri.hostname == window.location.hostname);
        }
    }
    catch(err) { return false; }
}
// function isRelativeUrl(url) {
//     return (!url.startsWith('http'));
// }

// function tryExpandUrl(url) {
//     if (url[0]=='/' || url=='') {
//         return `${window.location.protocol}//${window.location.host}${url}`;
//     } else if (url.startsWith('http')) {
//         return url;
//     } else {
//         console.log(`Invalid URL: ${url}`)
//         return false;
//     }
// }