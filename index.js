var elementosduvida = document.querySelectorAll('.duvida')

elementosduvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    }) 
})