export function createModal(heading, closeFunc, mainFunc) {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('modal');
    const background = document.createElement('div');
    background.classList.add('modal-background');
    container.appendChild(background);
    const box = document.createElement('div');
    box.classList.add('modal-box');
    container.appendChild(box);
    const header = document.createElement('div');
    header.classList.add('modal-header');
    box.appendChild(header);
    const title = document.createElement('h2');
    title.innerText = heading;
    header.appendChild(title);
    const close = document.createElement('button');
    close.classList.add('close-button');
    close.addEventListener('click', () => {
        closeFunc(container);
        body.removeChild(container);
    });
    header.appendChild(close);
    const content = document.createElement('div');
    content.classList.add('modal-content');
    box.appendChild(content);
    mainFunc(content);
    body.appendChild(container);
    content.close = () => {
        body.removeChild(container);
    }
    background.addEventListener('click', () => {
        closeFunc(container);
        body.removeChild(container);
    });
    return content;
}