// Base de datos inicial (NO cambiar estos valores)
const DB_INICIAL = {
    menu: [
        { id: 1, nombre: "Tacos al Pastor (Orden)", precio: 110.00 },
        { id: 2, nombre: "Enchiladas Verdes", precio: 135.00 },
        { id: 3, nombre: "Guacamole con Totopos", precio: 85.00 },
        { id: 4, nombre: "Agua de Horchata (Litro)", precio: 45.00 }
    ],
    comandas: []
};

// Inicialización
if (!localStorage.getItem('restauranteDB')) {
    localStorage.setItem('restauranteDB', JSON.stringify(DB_INICIAL));
}


function obtenerMenu() {
    /**
     * Lee la base de datos de localStorage y devuelve el menú.
     * 
     * - Debe usar localStorage.getItem('restauranteDB').
     * - Debe convertir el string a objeto usando JSON.parse().
     * - Devuelve exclusivamente el arreglo 'menu' contenido en el objeto.
     */
    throw new Error("Equipo: implementen obtenerMenu");
}


function guardarComanda(totalOrden) {
    /**
     * Guarda el registro de una nueva orden en localStorage.
     * 
     * - Obtiene la base de datos actual con localStorage.getItem y JSON.parse.
     * - Crea un objeto nuevo: { fecha: new Date(), total: totalOrden }.
     * - Agrega el objeto nuevo al arreglo 'comandas' usando .push().
     * - Convierte la base de datos a string con JSON.stringify().
     * - Guarda nuevamente usando localStorage.setItem().
     */
    throw new Error("Equipo: implementen guardarComanda");
}
