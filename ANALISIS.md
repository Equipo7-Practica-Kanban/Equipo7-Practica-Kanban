# Kanban (Evaluación Final)

> **Instrucciones:** Al finalizar el Día 3, cuando todas las tarjetas de código estén en la columna "Hecho", reúnanse como equipo, discutan las siguientes preguntas y escriban sus respuestas aquí. Al terminar, hagan un último `commit` y `push` con este archivo actualizado.

**1. Visibilidad del Flujo**

¿Cómo les ayudó tener el tablero visual en GitHub Projects para saber en qué estaba trabajando cada miembro del equipo sin tener que preguntarse a cada rato?

Tener el tablero Kanban centralizado en GitHub Projects funcionó como una "única fuente de verdad" visual para todo el equipo. Permitió que cualquier integrante supiera de inmediato qué tareas estaban pendientes en el Backlog, cuáles estaban activas en Desarrollo, cuáles estaban en proceso de Revisión por QA y cuáles ya habían sido completadas. Esto eliminó las constantes interrupciones para consultar avances, evitó la duplicación de esfuerzos o la sobreescritura accidental de código (por ejemplo, impidiendo que dos personas modificaran la lógica de `app.js` o `database.js` simultáneamente) y permitió al rol de QA saber con exactitud en qué momento probar una funcionalidad en cuanto ingresaba a la columna de Revisión.

**2. Límites de Trabajo en Curso (WIP)**

¿Cuál fue el límite WIP que establecieron para la columna "Desarrollo"? ¿Sintieron que esta restricción redujo el estrés o el *multitasking* en comparación con trabajar sin reglas?

Establecimos un límite WIP de **2 tareas simultáneas** en la columna de "Desarrollo". Esta restricción fue fundamental para fomentar el principio de *"dejar de empezar y empezar a terminar"*. Al impedir que los desarrolladores tomaran nuevas tareas antes de concluir las que ya estaban en curso, se eliminó el costo cognitivo del cambio continuo de contexto (*multitasking*). Como resultado, el nivel de estrés se redujo notablemente, las soluciones se programaron con mayor cuidado y los commits resultaron ser mucho más atómicos, claros y fáciles de revisar y mantener.

**3. Gestión de Cuellos de Botella**

Durante la práctica, ¿tuvieron alguna tarea que se quedó bloqueada o estancada mucho tiempo? Si fue así, ¿cómo se organizó el equipo para ayudar a destrabarla y mantener el flujo continuo?

El principal punto crítico ocurrió durante la sincronización entre la capa de datos (`database.js`) y la lógica de la interfaz (`app.js`), particularmente asegurando que la inicialización y lectura del objeto en `localStorage` no arrojara excepciones antes de que el frontend intentara renderizar los platillos. Al identificar esta dificultad, se aplicó la regla de marcar la tarjeta con la etiqueta `[BLOQUEADO]` en el tablero. De inmediato, el equipo pausó la entrada de nuevo trabajo para colaborar en modo de programación en pares (*pair programming*), probando la lectura del JSON y la estructura de datos directamente en la consola hasta asegurar que no hubiera errores antes de permitir el pase a la siguiente fase.

**4. Mejora Continua**

Si este proyecto del restaurante continuara durante todo el semestre, ¿qué política explícita nueva agregarían a su tablero o qué cambiarían de su límite WIP para ser más eficientes?

Si el proyecto continuara a lo largo del semestre, incorporaríamos las siguientes mejoras:
1. **Límite WIP en la columna de Revisión (QA):** Estableceríamos un WIP de máximo 1 o 2 tarjetas en Revisión para evitar cuellos de botella al final del ciclo de entrega y asegurar que el código no se quede esperando validación indefinidamente.
2. **Definición de Terminado (DoD) formal:** Como política explícita, ninguna tarea pasaría a "Hecho" sin incluir pruebas unitarias básicas automatizadas y una verificación de diseño responsivo (adaptabilidad a pantallas móviles y tablets).
3. **Flujo con Pull Requests y rama protegida:** Exigiríamos que cada tarjeta se desarrolle en una rama propia (`feature/...`) y requiera la aprobación de al menos un revisor antes del merge a `main`, reforzando la trazabilidad y la calidad del software.

