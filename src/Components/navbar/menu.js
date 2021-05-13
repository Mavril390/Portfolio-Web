document.addEventListener('DOMContentLoaded', function () {
    const hamburguer = document.querySelector('.navbar__hamburguer');
    const menu = document.querySelector('.navbar');

    if(hamburguer){
    hamburguer.addEventListener('click', () => {
        menu.classList.toggle("spread")
    })

    window.addEventListener('click', e => {
        if (menu.classList.contains('spread') &&
            e.target != menu && e.target != hamburguer) {
            menu.classList.toggle("spread")
        }
    })}
});