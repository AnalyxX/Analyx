const effect = document.getElementById('header')

function changeColorHeader() {
    effect.classList.toggle('active', scrollY > 450)
}



window.addEventListener('scroll', changeColorHeader)