import { about } from "../views/about.js";
import { task } from "../views/task.js";
import { home } from "../views/home.js"

let router = {
    "/":home,
    "/about":about,
    "/task":task,
}

function navigation(url) {
    const container = document.getElementById('content');
    container.innerHTML = router[url] ?? `<h1>Error 404</h1>`;
}

window.AppNavigator = navigation;