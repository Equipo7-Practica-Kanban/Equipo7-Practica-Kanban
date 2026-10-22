let totalActual = 0;


function cargarMenu() {
    /**
     * Renderiza el menú en el HTML.
     * 
     * - Llama a obtenerMenu() y guarda el resultado.
     * - Limpia el contenido de document.getElementById('menu-container').
     * - Itera sobre el arreglo de platillos.
     * - Por cada platillo, crea un <div> con la clase 'platillo'.
     * - El <div> debe mostrar el nombre y el precio.
     * - Debe asignar un evento onclick al <div> que llame a sumarTotal(precio).
     * - Agrega el <div> al contenedor.
     */
    const menu = obtenerMenu();
    const contenedor = document.getElementById('menu-container');
    contenedor.innerHTML = '';

    menu.forEach(platillo => {
        const div = document.createElement('div');
        div.className = 'platillo';
        div.innerHTML = `<h3>${platillo.nombre}</h3><p>$${platillo.precio.toFixed(2)}</p>`;
        div.onclick = function() {
            sumarTotal(platillo.precio);
        };
        contenedor.appendChild(div);
    });
}


function sumarTotal(precio) {
    /**
     * Actualiza el total de la orden en memoria y en pantalla.
     * 
     * - Suma el parámetro 'precio' a la variable global 'totalActual'.
     * - Actualiza el texto del elemento HTML con id 'total' para reflejar el nuevo valor.
     */
    totalActual += precio;
    document.getElementById('total').textContent = totalActual.toFixed(2);
}


// Evento del botón enviar
document.getElementById('btn-ordenar').addEventListener('click', function() {
    /**
     * Finaliza la orden y reinicia el sistema.
     * 
     * - Valida que 'totalActual' sea mayor a 0 (si es 0, no hace nada o muestra alerta).
     * - Llama a guardarComanda(totalActual).
     * - Lanza un alert("Orden enviada").
     * - Reinicia 'totalActual' a 0.
     * - Actualiza el texto del id 'total' en el HTML a "0.00".
     */
    if (totalActual <= 0) {
        alert("La orden no tiene platillos seleccionados.");
        return;
    }
    guardarComanda(totalActual);
    alert("Orden enviada");
    totalActual = 0;
    document.getElementById('total').textContent = "0.00";
});


// Arranca la app inicial
cargarMenu();
