# To-Do List App - Ionic

Este es un proyecto de aplicación de lista de tareas (To-Do List) desarrollado con **Ionic**. A continuación, se describen los pasos para ejecutar la aplicación localmente en tu entorno de desarrollo.

# Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes requisitos:

1. **Node.js**: Descarga e instala Node.js
2. **Ionic CLI**: Instala Ionic CLI usando el siguiente comando:
   ```bash
   npm install -g @ionic/cli

# Clonar el Repositorio
Clona el repositorio del proyecto en tu máquina local:

git clone https://github.com/Danth2907/todo-app-ionic.git

Entra en el directorio del proyecto:

cd todo-app-ionic

# Instalación de Dependencias

Una vez dentro del directorio del proyecto, instala las dependencias necesarias utilizando el siguiente comando:

npm install

# Ejecución de la Aplicación

Para ejecutar la aplicación en un navegador, usa el siguiente comando:

ionic serve


Si deseas probar la aplicación en un dispositivo móvil (Android/iOS), primero asegúrate de tener configurado el entorno de desarrollo adecuado para tu plataforma.

Para Android asegúrese de tener Android Studio y el entorno de desarrollo configurado. Luego, ejecute:

ionic capacitor run android

# Aplicación

Pantalla de inicio: Muestra un resumen de las tareas pendientes y completadas.
Agregar tareas: Permite a los usuarios agregar nuevas tareas con un título, descripción y tipo (trabajo, casa, negocios).
Lista de tareas: Muestra todas las tareas pendientes con opciones para marcarlas como completadas y eliminarlas.
Detalles de tarea: Al hacer clic en una tarea, se mostrarán sus detalles (título, descripción, estado).

