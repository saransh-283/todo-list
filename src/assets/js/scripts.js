const html = document.getElementsByTagName('html')[0]
const toggle = document.getElementById('theme-toggle')
const notch = document.getElementById('circle')
var dark = localStorage.getItem('dark') ? localStorage.getItem('dark') : 'false'
html.setAttribute('data-theme', dark)
localStorage.setItem('dark', dark)

function toggleClick() {
    html.setAttribute('data-theme', !dark)
    dark = !dark
    localStorage.setItem('dark', dark)
}

toggle.addEventListener('click', toggleClick)