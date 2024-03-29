export function createContextMenu(options, posX, posY, destoryOnOutsideClick = true, destoryOnInsideClick = true) {
    const contextMenu = document.createElement('div');
    contextMenu.classList.add('context-menu');
    options.forEach(option => {
        if (option.type === 'item') {
            const optionElement = document.createElement('div');
            optionElement.classList.add('item');
            optionElement.innerText = option.text;
            optionElement.onclick = option.onClick;
            contextMenu.appendChild(optionElement);
        } else if (option.type === "row") {
            const rowElement = document.createElement('div');
            option.items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('item');
                itemElement.innerText = item.text;
                itemElement.onclick = item.onClick;
                rowElement.appendChild(itemElement);
            });
            rowElement.classList.add('row');
            contextMenu.appendChild(rowElement);
        } else if (option.type === "separator") {
            const separator = document.createElement('hr');
            contextMenu.appendChild(separator);
        }
    });

    document.body.appendChild(contextMenu);

    if (contextMenu.offsetWidth + posX > window.innerWidth) {
        posX -= contextMenu.offsetWidth;
    }
    if (contextMenu.offsetHeight + posY > window.innerHeight) {
        posY -= contextMenu.offsetHeight;
    }

    contextMenu.destory = () => {
        if (document.body.contains(contextMenu))
            document.body.removeChild(contextMenu);
    }

    if (destoryOnOutsideClick) {
        document.addEventListener('mousedown', (e) => {
            if (!contextMenu.contains(e.target)) {
                contextMenu.destory();
                document.removeEventListener('mousedown', () => { });
            }
        });
    }

    if (destoryOnInsideClick) {
        contextMenu.addEventListener('click', (e) => {
            contextMenu.destory();
            document.removeEventListener('click', () => { });
        });
    }

    contextMenu.style.left = `${posX}px`;
    contextMenu.style.top = `${posY}px`;

    return contextMenu;
}