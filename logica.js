document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.input_codificar');
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
        console.log(textoEncriptado); // Imprime el texto encriptado en la consola
    });

    desencriptarButton.addEventListener('click', function() {
        const texto = textarea.value.toLowerCase(); // Convertir texto a minúsculas
        const textoDesencriptado = desencriptarTexto(texto);
        console.log(textoDesencriptado); // Imprime el texto desencriptado en la consola
    });

    function encriptarTexto(texto) {
        // Reemplazar vocales según las reglas especificadas
        let textoEncriptado = texto.replace(/a/g, 'enter');
        textoEncriptado = textoEncriptado.replace(/e/g, 'imes');
        textoEncriptado = textoEncriptado.replace(/i/g, 'ai');
        textoEncriptado = textoEncriptado.replace(/o/g, 'ober');
        textoEncriptado = textoEncriptado.replace(/u/g, 'ufat');
        
        return textoEncriptado;
    }

    function desencriptarTexto(texto) {
        // Revertir el proceso de encriptación
        let textoDesencriptado = texto.replace(/ufat/g, 'u');
        textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
        textoDesencriptado = textoDesencriptado.replace(/ai/g, 'i');
        textoDesencriptado = textoDesencriptado.replace(/imes/g, 'e');
        textoDesencriptado = textoDesencriptado.replace(/enter/g, 'a');
        
        return textoDesencriptado;
    }
});


