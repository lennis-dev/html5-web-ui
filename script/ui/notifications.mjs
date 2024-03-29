export function createNotification(text, type, duration) {
    const root = document.querySelector('body .notification-container');
    const el = document.createElement('div');
    el.classList.add('notification');
    const heading = document.createElement('div');
    heading.classList.add('heading');
    switch (type) {
        case 'info':
            el.classList.add('info');
            heading.textContent = 'Info:';
            heading.classList.add('info');
            break;
        case 'error':
            el.classList.add('error');
            heading.textContent = 'Error:';
            heading.classList.add('error');
            break;
        case 'warning':
            el.classList.add('warning');
            heading.textContent = 'Warning:';
            heading.classList.add('warning');
            break;
        case 'success':
            el.classList.add('success');
            heading.textContent = 'Success:';
            heading.classList.add('success');
            break;
    }
    const close = document.createElement('div');
    close.classList.add('close');
    close.onclick = () => {
        if (root.contains(el))
            el.remove();
    };
    el.appendChild(close);
    el.appendChild(heading);
    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = text;
    el.appendChild(message);
    root.appendChild(el);
    if (duration != -1)
        setTimeout(() => {
            if (root.contains(el))
                el.remove();
        }, duration);
    console.log("[" + type + "]", text, "(" + duration + "ms)");
    return el;
}