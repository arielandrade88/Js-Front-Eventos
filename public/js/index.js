window.onload = function(){
    //JavaScript del Index
    let $container = document.querySelector('.container');
    let $subtitle = document.querySelector('.subtitulo');
    let $outstanding = document.querySelectorAll('p');
    let $background = document.querySelector('body');
    let $link = document.querySelector('a');
    let $menu = document.querySelector('#menu');
    let $logo = document.querySelector('.logoDH');
    
    let name = prompt('Ingrese su nombre');
    /* console.log(nombre); */
    if(name !=''){
        $subtitle.innerHTML += ' ' + name;
    }else{
        $subtitle.innerHTML += ' INVITADO';
    }
    
    $subtitle.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        $background.classList.add('fondo');
        $link.style.color = '#E51B3E';
    }
    
    for(let i = 0 ; i < $outstanding.length; i++){
        if(i % 2 == 0){
            $outstanding[i].classList.add('destacadoPar');
        }else{
            $outstanding[i].classList.add('destacadoImpar');
        }
    }
    
    $container.style.display = 'block';
    
    $logo.addEventListener('click', function () {
        $menu.classList.toggle('mostrar') 
    })

    $menu.addEventListener('mouseout', function () {
        $menu.classList.toggle('mostrar')
    })
}