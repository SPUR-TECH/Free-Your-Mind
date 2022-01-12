// health page parallax effect

function parallax(element, distance, speed) {
    const items = document.querySelector(element);
    items.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
    parallax(".third-title", window.scrollY, 0.3);
});