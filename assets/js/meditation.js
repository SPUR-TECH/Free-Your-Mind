// meditation page parallax effect

function parallax(element, distance, speed) {
    const items = document.querySelector(element);
    items.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
    parallax(".first-title", window.scrollY, 0.3);
});