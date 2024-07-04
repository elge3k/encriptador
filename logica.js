document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.input_codificar');
    const output = document.querySelector('.mensaje_no_encontrado .mensaje');
    const personaImg = document.querySelector('.mensaje_no_encontrado .imagen_persona');
    const encriptarButton = document.querySelector('.boton_primario');
    const desencriptarButton = document.querySelector('.boton_secundario');

    // Agregar evento keydown para validar entrada en minúsculas
    textarea.addEventListener('keydown', function(event) {
        const tecla = event.key;
        // Permitir las teclas de control y backspace
        if (event.ctrlKey || event.altKey || event.metaKey || tecla === 'Backspace') {
            return; // Permitir teclas de control y backspace sin restricción
        }
        // Validar si la tecla presionada no es una letra minúscula
        if (tecla !== tecla.toLowerCase()) {
            event.preventDefault(); // Prevenir la entrada de la tecla
        }
    });

    encriptarButton.addEventListener('click', function() {
        const texto = textarea.value.toLowerCase(); // Convertir texto a minúsculas
        const textoEncriptado = encriptarTexto(texto);
        personaImg.classList.add('imagen_oculta'); // Ocultar la imagen
        output.innerHTML = textoEncriptado; // Mostrar el texto encriptado en el output
    });

    desencriptarButton.addEventListener('click', function() {
        const texto = textarea.value.toLowerCase(); // Convertir texto a minúsculas
        const textoDesencriptado = desencriptarTexto(texto);
        personaImg.classList.add('imagen_oculta'); // Ocultar la imagen
        output.innerHTML = textoDesencriptado; // Mostrar el texto desencriptado en el output
    });

    function encriptarTexto(texto) {
        // Reemplazar vocales según las reglas especificadas
        let textoEncriptado = texto.replace(/a/g, 'ai');
        textoEncriptado = textoEncriptado.replace(/e/g, 'enter');
        textoEncriptado = textoEncriptado.replace(/i/g, 'imes');
        textoEncriptado = textoEncriptado.replace(/o/g, 'ober');
        textoEncriptado = textoEncriptado.replace(/u/g, 'ufat');
        
        return textoEncriptado;
    }

    function desencriptarTexto(texto) {
        // Revertir el proceso de encriptación
        let textoDesencriptado = texto.replace(/ufat/g, 'u');
        textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
        textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i');
        textoDesencriptado = textoDesencriptado.replace(/enter/g, 'e');
        textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a');
        
        return textoDesencriptado;
    }
});




