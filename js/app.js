document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    console.log(email)

    //Seleccionando los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto  = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')

    //Asignando elementos 
    //blur es un evento que se dispara cuando sales del input
    inputEmail.addEventListener('input', validar)

    inputAsunto.addEventListener('input', validar)

    inputMensaje.addEventListener('input', validar)


    function validar(e){

        // console.log(e.target.parentElement)
        // console.log(e.target.id)
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            email[e.target.name] = ''
            comprobarEmail()
            return
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement)
            comprobarEmail()
            email[e.target.name] = ''
            return
        }

        limpiarAlerta(e.target.parentElement)

        //asignar los valores
        console.log(e.target.name)
        email[e.target.name] = e.target.value.trim().toLowerCase()
        console.log(email)

        //comprobar el objeto de email
        comprobarEmail()

    }

    function mostrarAlerta(mensaje, referencia){
        //Comprueba si ya existe una alerta 
        limpiarAlerta(referencia)

        //Generar alerta en HTML
        const error = document.createElement('P')
        error.textContent = mensaje
        error.classList.add('bg-red-600','text-white','p-2','text-center')

        //inyectando el error al formulario 
        referencia.appendChild(error)
    }


    function limpiarAlerta(referencia){
        
        const alerta = referencia.querySelector('.bg-red-600')
        console.log(alerta)

        if(alerta){
            alerta.remove()
        }
    }

    function validarEmail(email){
        const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = validEmail.test(email)
        return resultado
    }


    function comprobarEmail(){
        console.log(email)
        //comprobar si el email es correcto
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true
            return
        }
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false
    }
})