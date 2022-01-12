// home page parallax effect

function parallax(element, distance, speed) {
    const items = document.querySelector(element);
    items.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
    parallax(".first-title", window.scrollY, 0.2);
    parallax(".second-title", window.scrollY, 0.2);
    parallax(".third-title", window.scrollY, 0.2);
    parallax(".forth-title", window.scrollY, 0.2);
});