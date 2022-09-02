/**
 * Allows load repetitive html fragments
 * @param {String} target 
 * @param {htmlElement} htmlElement 
 * @returns 
 */
const loadTemplate = (target, htmlElement) => {
    if (!htmlElement) return;

    fetch(`./components/${target}.html`)
        .then(data => data.text())
        .then(data => htmlElement.innerHTML = data);
}

document.querySelectorAll("[data-binary]").forEach(element => loadTemplate("binary",element))
document.querySelectorAll("[data-logo]").forEach(element => loadTemplate("logo",element))