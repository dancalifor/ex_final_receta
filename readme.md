Gestor de Recetas de Cocina

Descripción del Proyecto

El "Gestor de Recetas de Cocina" es una aplicación web sencilla diseñada para ayudar a los usuarios a crear, visualizar, editar y eliminar recetas de cocina. El sistema permite almacenar las recetas de forma persistente en el navegador, por lo que al volver a visitar la página, los datos se mantienen intactos.


Tecnologías Utilizadas

HTML5: Estructura de la página web.

CSS3: Estilos y diseño visual.

JavaScript (Vanilla JS): Lógica y funcionalidades del sistema.

LocalStorage (Web Storage API): Almacenamiento local de los datos en el navegador.

Estructura de Carpetas y Archivos

/gestor-recetas/
─ index.html          # Página principal
─ style.css           # Estilos visuales
─ script.js           # Lógica y funcionalidades
─ README.md           # Documentación del proyecto

Descripción de la Base de Datos o Método de Almacenamiento

Este proyecto no utiliza una base de datos tradicional. En su lugar, emplea LocalStorage, una funcionalidad nativa de los navegadores web que permite guardar información de manera persistente.

Las recetas se almacenan como un array de objetos en formato JSON.

Cada receta contiene:

title → Nombre de la receta

ingredients → Ingredientes de la receta (separados por coma)

instructions → Instrucciones de preparación

Ejemplo de cómo se almacena la información:

[
  {
    "title": "Tarta de Manzana",
    "ingredients": "manzana, harina, azúcar",
    "instructions": "Mezclar los ingredientes y hornear a 180°C."
  }
]

La información se guarda en el navegador del usuario, por lo que no se requiere conexión a un servidor o base de datos externa.

Enlace al Proyecto Desplegado

