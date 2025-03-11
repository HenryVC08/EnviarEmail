document.addEventListener('DOMContentLoaded', function(){
    //Seleccionando los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto  = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario')

    //Asignando elementos 
    //blur es un evento que se dispara cuando sales del input
    inputEmail.addEventListener('blur', validar)

    inputAsunto.addEventListener('blur', validar)

    inputMensaje.addEventListener('blur', validar)


    function validar(e){
        if(e.target.value.trim() === ''){
            mostrarAlerta()
        }else{
            console.log('No esta vacio')
        }
    }

    function mostrarAlerta(){
        //Generar alerta en HTML
        const error = document.createElement('P')
        error.textContent = 'Hubo un error'
        error.classList.add('bg-red-600','text-white','p-2','text-center')

        //inyectando el error al formulario 
        formulario.appendChild(error)
    }
})