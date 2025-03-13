const elements = {
    themeToggleBtn: document.getElementById("theme-toggle"),
    root : document.documentElement
};

let dark = false;

function initializeApp() {
    elements.themeToggleBtn.addEventListener('click', updateTheme);
    elements.themeToggleBtn.innerText = "Switch to Dark Mode";
};

function updateTheme() {
    dark = !dark;

    if (dark) {
        elements.root.setAttribute("data-theme", "dark"); 
        elements.themeToggleBtn.textContent = "Switch to Light Mode";
    } else {
        elements.root.removeAttribute("data-theme");
        elements.themeToggleBtn.textContent = "Switch to Dark Mode";
    };
};

initializeApp();