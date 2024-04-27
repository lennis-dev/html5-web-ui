import { getHashParams, getRootHash } from "./nav.mjs";
import { createNewNavBarEntry } from "./navbar.mjs";

const pages = {};

export function createNewPage(hash, name, init, main, createNavBarEntry = true) {
    if (createNavBarEntry)
        createNewNavBarEntry(name, "#" + hash);
    const root = document.querySelector('main');
    const el = document.createElement('div');
    el.classList.add('page');
    el.id = "page-" + hash;
    root.appendChild(el);
    pages[hash] = {
        name: name,
        init: init,
        main: main,
        el: el
    };
    el.createBox = createBox;
    el.createSubGrid = createSubGrid;
    init(el);
}

function loadPage() {
    var hash = getRootHash();
    const page = pages[hash];
    if (page) {
        document.querySelectorAll('main>.page').forEach(el => {
            el.style.display = 'none';
        });
        page.el.style.display = '';
        page.main(page.el, getHashParams());
    } else {
        window.location.hash = "#" + Object.keys(pages)[0];
    }
}
window.addEventListener("hashchange", loadPage);

window.addEventListener("load", loadPage);

function createBox(area = "1x1") {
    const box = document.createElement('div');
    box.classList.add('box');
    box.classList.add("a" + area);
    this.appendChild(box);
    return box;
}

function createSubGrid() {
    const grid = document.createElement('div');
    grid.createBox = createBox;
    grid.classList.add('subgrid');
    this.appendChild(grid);
    return grid;
}