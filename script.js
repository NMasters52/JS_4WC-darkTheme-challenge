const elements = {
    themeToggle: document.getElementById("theme-toggle"),
    test: document.getElementById('test')

};

let dark = false;

function initializeApp() {
    elements.themeToggle.addEventListener('click', test);
    
};

function test() {
    dark = !dark;
 dark ? elements.test.innerText = "theme is dark" : elements.test.innerText = "theme is light";
};

initializeApp();