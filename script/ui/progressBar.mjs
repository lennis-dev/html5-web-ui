export function createCircularProgressBar(parentEl, color, progress, textPrefix = "") {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 36 36");
    svg.classList.add("progress-bar");

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("fill", "none");
    circle.setAttribute("stroke-width", "3");
    circle.setAttribute("r", "16");
    circle.setAttribute("cx", "18");
    circle.setAttribute("cy", "18");
    circle.setAttribute("stroke-dasharray", "100 100");
    circle.setAttribute("stroke", color);
    circle.setAttribute("stroke-linecap", "round");
    circle.setAttribute("transform", "rotate(-90 18 18)");

    svg.appendChild(circle);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "18");
    text.setAttribute("y", "18");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "5");
    text.setAttribute("fill", color);

    const line1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    line1.textContent = textPrefix;
    line1.setAttribute("x", "18");
    line1.setAttribute("dy", "-0.5em");
    text.appendChild(line1);

    const line2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    line2.textContent = progress + "%";
    line2.setAttribute("x", "18");
    line2.setAttribute("dy", "1em");
    text.appendChild(line2);

    svg.appendChild(text);

    svg.setProgress = function (progress) {
        const radius = circle.getAttribute('r');
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - progress / 100 * circumference;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = offset;
        line2.textContent = progress + "%";
    }

    svg.setProgress(progress);

    parentEl.appendChild(svg);
    return svg;
}

