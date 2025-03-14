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

        console.log(e.target.parentElement)
        console.log(e.target.id)
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
        }else{
            console.log('No esta vacio')
        }
    }

    function mostrarAlerta(mensaje, referencia){
        //Generar alerta en HTML
        const error = document.createElement('P')
        error.textContent = mensaje
        error.classList.add('bg-red-600','text-white','p-2','text-center')

        //inyectando el error al formulario 
        referencia.appendChild(error)
    }
})