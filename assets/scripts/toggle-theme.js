const { classList } = document.documentElement

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    classList.add("dark")
} else {
    classList.add("light")
}

const toggleDarkMode = () => {
   
    if (classList.contains("light")) {
        classList.remove("light")
        classList.add("dark")
    } else {
        classList.remove("dark")
        classList.add("light")
    } 
}

toggleDarkMode();