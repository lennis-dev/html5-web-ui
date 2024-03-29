import { getRootHash } from "./nav.mjs";

export function createNewNavBarEntry(text, url, top = true,) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = text;
    a.href = url;
    li.appendChild(a);
    if (top)
        document.querySelector('nav>ul.top-nav').appendChild(li);
    else
        document.querySelector('nav>ul.bottom-nav').appendChild(li);
}

function updateActiveNavBarEntrys() {
    document.querySelectorAll('nav>ul').forEach(ul => {
        ul.querySelectorAll('li').forEach(li => {
            if (getRootHash() === li.querySelector('a').href.split('#')[1]) {
                li.classList.add('active');
            } else {
                li.classList.remove('active');
            }
        });
    });
}

window.addEventListener("hashchange", updateActiveNavBarEntrys);
window.addEventListener("load", updateActiveNavBarEntrys);