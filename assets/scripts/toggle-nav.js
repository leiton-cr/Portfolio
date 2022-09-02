document.querySelectorAll(".header-nav__link").forEach(element => {
    element.addEventListener('click', () => setTimeout(() => document.getElementById("toggle-input").checked = true, 250))
})