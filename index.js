function parallax(element, distance, speed) {
    const items = document.querySelector(element);
    items.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
    parallax(".first-title", window.scrollY, 0.4);
    parallax(".second-title", window.scrollY, 0.48);
    parallax(".third-title", window.scrollY, 0.5);
    parallax(".forth-title", window.scrollY, 0.46);
});