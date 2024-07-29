/* this function is global */

function navigate(event, path) {
    event.preventDefault();
    history.pushState(null, null, path);
    route();
}

function route() {
    const path = window.location.pathname;
    const contentDiv = document.getElementById('content');

    switch (path){
        case '/' : contentDiv.innerHTML = '<h1>About Page</h1>';break;
        case '/second' : contentDiv.innerHTML = '<h1>Home Page</h1>';break;
        default : contentDiv.innerHTML = '<h1>404 not found</h1>';
    }
}

window.addEventListener('popstate', route);
window.onload = route;