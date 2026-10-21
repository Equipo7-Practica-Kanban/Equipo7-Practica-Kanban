# Kanban- Restaurante

## Actividades Esperadas (Práctica de 3 días)
*   **Día 1:** El líder hace el *Fork*, crea el tablero Kanban en la pestaña "Projects" (Columnas: *Backlog, Desarrollo, Revisión, Hecho*), definen su límite WIP y comienzan a programar.
*   **Día 2:** Programan las funcionalidades en JavaScript/CSS gestionando visualmente cualquier bloqueo en el tablero.
*   **Día 3:** Terminan el desarrollo, mueven las tarjetas a "Hecho" y el equipo responde las preguntas del archivo **Evaluación.md**.

## Roles dentro de cada equipo
| Rol | Qué hace |
| :--- | :--- |
| **Líder (Service Delivery Manager)** | Hace el Fork, configura el tablero Kanban en "Projects" y vigila que se respete el límite WIP. |
| **Dev (Desarrollador)** | "Jala" (*pull*) tarjetas, programa las funciones del archivo `TAREAS.md` y hace los commits. |
| **QA / Revisor** | Prueba el código en el navegador (revisa consola) antes de mover la tarjeta a "Hecho". |

```bash
git clone <URL_DEL_REPO>
cd Practica-Kanban
```

## Flujo de trabajo

1. **Prueben su Backlog:** Creen tarjetas en su tablero Kanban basándose en el archivo `TAREAS.md`.
2. **Tomen trabajo (Pull):** Muevan su tarjeta a la columna *Desarrollo* solo si no han rebasado el límite WIP.
3. **Programen en SU archivo** (dentro de la carpeta `js/` o `css/`).
4. **Suban cambios (Push) por cada tarea:**
   ```bash
   git add .
   git commit -m "feat: completa renderizado del menu"
   git push origin main
   ```

## Reglas
* **Límite WIP:** Prohibido empezar una tarea nueva si la columna Desarrollo está llena. Ayuden a destrabar primero.
* **Políticas Explícitas:** Para mover una tarjeta a Revisión, el código no debe marcar errores en la consola (F12).
* **Bloqueos:** Si se atoran, escriban [BLOQUEADO] en el título de su tarjeta en el tablero. El equipo debe detenerse a ayudar.
* Hagan commits pequeños y claros por cada tarea terminada.
* Contesten el archivo ANALISIS.md únicamente hasta que hayan terminado el código.

## Estructura
```text
index.html         <- Vista principal
css/style.css      <- Aquí dan diseño al menú
js/database.js     <- Aquí simulan la base de datos con localStorage
js/app.js          <- Aquí programan la lógica de los clics y sumas
ANALISIS.md        <- Archivo de evaluación final
```
