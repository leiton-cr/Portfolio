const rootClasses = document.documentElement.classList;
const switchClasses = document.getElementById("theme-switcher").classList;

rootClasses.add( (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light" );
switchClasses.add( (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light" );

const toggleDarkMode = () => {
    rootClasses.toggle("light");
    rootClasses.toggle("dark");

    switchClasses.toggle("light");
    switchClasses.toggle("dark");
}

document.getElementById("theme-switcher").addEventListener("click", toggleDarkMode);