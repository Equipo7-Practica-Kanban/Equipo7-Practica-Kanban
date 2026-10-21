# Lista de Tareas (Backlog del Equipo)

> **Instrucción:** Creen una tarjeta en la columna "Backlog" de su tablero Kanban por cada una de estas tareas. Asígnense las tareas según su capacidad (Sistema Pull)[cite: 1].

### Tareas de Base de Datos (Editar `js/database.js`)
*   **Tarea 1:** Completar la función `obtenerMenu()`. Debe leer el item `restauranteDB` de `localStorage`, usar `JSON.parse` y retornar el arreglo `menu`.
*   **Tarea 2:** Completar la función `guardarComanda(total)`. Debe crear un objeto con la fecha actual y el total, agregarlo al arreglo `comandas` y guardar el JSON actualizado en `localStorage`.

### Tareas de Frontend y Lógica (Editar `js/app.js`)
*   **Tarea 3:** En la función `cargarMenu()`, usar `obtenerMenu()` para iterar sobre los platillos y agregarlos dinámicamente al contenedor `#menu-container` en el HTML.
*   **Tarea 4:** Crear una función que escuche los clics en los platillos, sume su precio a la variable global `totalActual`, y actualice el texto del id `#total` en pantalla.
*   **Tarea 5:** En el evento del botón `#btn-ordenar`, validar que el total sea mayor a 0, ejecutar `guardarComanda(totalActual)`, lanzar un `alert("Orden enviada")` y reiniciar el total a cero.

### Tareas de Diseño (Editar `css/style.css`)
*   **Tarea 6:** Convertir el `#menu-container` en un `display: grid` o `flexbox`.
*   **Tarea 7:** Darle estilo de tarjeta (fondo blanco, sombra, bordes redondeados, cursor pointer) a cada platillo generado para que parezca un botón interactivo.
