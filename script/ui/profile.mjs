import { createContextMenu } from "./contextMenu.mjs";
const el = document.querySelector('header>.profile');
export function registerProfileContextMenu(options = []) {
    el.onclick = () =>
        createContextMenu(options, window.innerWidth - 20, 90, "right", "top");
}



export function setUser(user) {
    setAvatar(user.avatar);
    setName(user.name);
}

export function setAvatar(avatar) {
    document.querySelector('header>.profile>div.avatar>img').src = avatar;
}

export function setName(name) {
    document.querySelector('header>.profile>div.name').textContent = name;
}
