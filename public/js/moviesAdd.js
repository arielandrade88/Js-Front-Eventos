window.onload = function () {
    function randomColors(c1, c2, c3, c4, c5) {
        let colors = [c1, c2, c3, c4, c5]
        let random = Math.floor((Math.random() * (5 - 0)) + 0)
        let colorRandom = colors[random]
        return colorRandom
    }
    let $title = document.querySelector('.moviesAddTitulo')
    let $form = document.querySelector('#formulario');
    let $article = document.querySelector('article');
    $title.addEventListener('mouseover', function () {
        $title.style.backgroundColor = randomColors("red", "orange", "yellow", "green", "blue")
    })
    $title.innerHTML = 'AGREGAR PELÍCULA';
    $title.classList.add('titulo');
    $article.classList.add('fondoTransparente');
    $form.classList.add('fondoCRUD');

    let estadoSecreto = 0

    let $newTitle = document.querySelector('#titulo')
    $newTitle.addEventListener('keyup', function(event) {
        switch (estadoSecreto) {
            case 0:
                event.key == "s" ? estadoSecreto++ : (estadoSecreto = 0)
                break;
        
            case 1:
                event.key == "e" ? estadoSecreto++ : (estadoSecreto = 0)
                break;
        
            case 2:
                event.key == "c" ? estadoSecreto++ : (estadoSecreto = 0)
                break;
        
            case 3:
                event.key == "r" ? estadoSecreto++ : (estadoSecreto = 0)
                break;
        
            case 4:
                event.key == "e" ? estadoSecreto++ : (estadoSecreto = 0)
                break;
        
            case 5:
                event.key == "t" ? estadoSecreto++ : (estadoSecreto = 0)
                break;
        
            case 6:
                event.key == "o" ? Swal.fire('SECRETO MAGICO') : (estadoSecreto = 0)
                break;
        
            default:
                break;
        }
    })


}