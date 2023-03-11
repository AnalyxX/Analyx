const effect = document.getElementById('header')

function changeColorHeader() {
    effect.classList.toggle('active', scrollY > 1)
   
}



window.addEventListener('scroll', changeColorHeader)