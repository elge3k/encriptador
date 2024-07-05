document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.input_codificar');
    const output = document.querySelector('.mensaje_no_encontrado .mensaje');
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
        output.innerHTML = textoEncriptado; // Mostrar el texto encriptado en el output
    });

    desencriptarButton.addEventListener('click', function() {
        const texto = textarea.value.toLowerCase(); // Convertir texto a minúsculas
        const textoDesencriptado = desencriptarTexto(texto);
        output.innerHTML = textoDesencriptado; // Mostrar el texto desencriptado en el output
    });

    function encriptarTexto(texto) {
        // Reemplazar vocales según las reglas especificadas
        texto = texto.replace(/e/g, 'enter');
        texto = texto.replace(/i/g, 'imes');
        texto = texto.replace(/a/g, 'ai');
        texto = texto.replace(/o/g, 'ober');
        texto = texto.replace(/u/g, 'ufat');
        
        return texto;
    }

    function desencriptarTexto(texto) {
        // Revertir el proceso de encriptación
        texto = texto.replace(/ufat/g, 'u');
        texto = texto.replace(/ober/g, 'o');
        texto = texto.replace(/imes/g, 'i');
        texto = texto.replace(/enter/g, 'e');
        texto = texto.replace(/ai/g, 'a');
        
        return texto;
    }
});





