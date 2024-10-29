let navbar = document.querySelector('#header')

document.addEventListener("scroll",()=> {
    let scrolltop = window.scrolly

    if(scrolltop > 0) {
        navbar.classList.add('rolar')
    } else {
        navbar.classList.remove('rolar')
    }
})