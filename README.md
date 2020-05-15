# Talent App

Administrador de tareas utilizable en escritorio para el equipo de 4040apps.

#### Index

- [Autoras](#Autoras)
- [Introduction](#Introduction)
- [Historias de usuario y subtareas](#Historias-de-usuario-y-subtareas)
  - [Sprint 1](#-sprint-1-)
  - [Srpint 2](#-sprint-2-)
  - [Sprint 3](#-sprint-3-)
  - [Sprint 4](#-sprint-4-)
  - [Sprint 5](#-sprint-5-)
- [Herramientas](#Herramientas)
  - [Herramientas de comunicacion](#Herramientas-de-comunicacion)
- [Prototipo de alta fidelidad](#Prototipo-de-alta-fidelidad)
- [Deploy](#Deploy)
- [Diagrama de flujo en Git Hub](#Diagrama-de-flujo-en-Git-Hub)
- [Metodo de organizacion](#Metodo-de-organizacion)

## Autoras ✒️

Este proyecto fue realizado en su totalidad por 5 desarrolladoras que colaboraron para levantar

- Bianca Cardona ([Biancardona](https://github.com/Biancardona)).
- Claudia Custodio([Dionisiaca](https://github.com/Dionisiaca)).
- Karen Ramírez ([KARENLABO](https://github.com/KARENLABO)).
- Monse Salas([MonseSalasVi](https://github.com/MonseSalasVi)).
- Teresa Carbajal ([TeresaC21](https://github.com/TeresaC21)).

## Introduccion

En este proyecto nos enfocamos en construir una aplicación que permitiera al usuario administrar sus tareas del día, llevar un registro de sus tiempos y realizar un balance para gestionar el tiempo dedicado a cada tarea para mejorar los flujos de trabajo. Nos basamos en los requerimientos establecidos por 4040apps.

## Historias de usuario y tareas

### -Sprint 1 📋

Definir code styling
Github repo

- Crear repositorio
- Agregar colaboradores
- Crear develop branch
- Hacer develop branch default
- Todo el equipo clona el repo y crea feature branches

### -Sprint 1: 📋

Cubos API
Historia 1. Función que puede ejecutar un método GET sobre la API, por cada entidad como parámetros (Projects), y retorna la respuesta del API

- Historia 2. Función que puede ejecutar un método GET sobre la API, por cada entidad como parámetros (Staff ), y retorna la respuesta del API

- Historia 3. Función que puede ejecutar un método GET sobre la API, por cada entidad como parámetros (Tasks), y retorna la respuesta del API

* Función que puede ejecutar un metodo POST sobre la API, recibe parámetros (por definir), y retorna el código de respuesta, debe retornar un error si el código de respuesta es diferente a 200 (ok) o 201 (created)(típicamente).

Base de Datos

- Crear una función que permite añadir o sobrescribir en el API (GET method), los siguientes campos (sugeridos): - ID de tarea - Descripción de la tarea - Status (Completo, Revisión, Detenido por cliente, Pruebas) - Proyecto - Tiempo acumulado en formato HH:MM:SS (horas, minutos, segundos) - Nombre de último usuario asignado (UID o email? y nombre?)
- Crear una función que permite crear tareas nuevas según información del API
- Colección de todos los usuarios, con una subcolección (usuario), el cual podrá registrarse e iniciar sesión

* Hacker edition tarea: cada tarea tendrá un registro de tiempo trabajado por cada usuario, no solo el acumulado total de todos. (que varios usuario trabajen en la misma tarea)(sprint 5)
* Hacker edition usuario: cada usuario tendrá una subcolección por fecha, cada fecha incluirá por ejemplo:(sprint 5)
  5 de Mayo:
  Tarea X - 2:00 hrs
  Tarea Y - 1:20 hrs
  Total: 3:20 hrs
* Hacker edition proyecto: una coleccion por proyecto que tendra una relacion de todas las tareas del proyecto y un acumulado de tiempo que sería la sumatoria del tiempo del tiempo de cada usuario en cada tarea
  - Historia funcional 1:
    Área de Tareas:
    Crear tarea con metodo POST

Como usuario de la aplicación puedo ver un listado de todas las tareas disponibles
El listado de tareas solo incluye el nombre de ellas

Aspectos no funcionales de la historia:
Cada tarea y su detalles/campos es mostrado consistentemente para todos los usuarios (1 por lo pronto, cada que es cargada muestra las mismas tareas)
Todas las tareas son visibles en tamaño de pantalla escritorio.
No hay duplicación de tareas/campos en la base de datos.
Discutir qué hacer con tareas que están en la base de datos y ya no existen en el API, o tareas nuevas que no existían y ahora ya existen en el API
Historia funcional 2:
Usuarios:
Como usuario invitado puedo crear una nueva cuenta de usuario usando correo electrónico y password / token.
Como usuario registrado puedo loguearme a la aplicación usando el correo electrónico y passwords proporcionados en el registro
Como usuario al registrarme usando un email no valido, no se me permite registrarme
Como usuario al registrarme usando un password no válido según las reglas establecidas, no se me permite registrarme
Aspectos no funcionales de la historia:
Definir requerimientos mínimos para el password
Un usuario no logueado, no debería poder visualizar ninguna información navegando manualmente a cualquiera de las rutas de la aplicación

### -Sprint 2 📋

- Historia funcional 3:
  Relación Usuario y Tarea:
  Como usuario X al ingresar a la aplicación, solo puedo visualizar las tareas asignadas a usuario X
  Cada tarea es asociable a cada usuario por su nombre/email?
  Aspectos no funcionales de la historia:

- Historia funcional 4:
  Botón Iniciar/ Pausar:
  Como usuario puedo ver un botón en cada tarea
  Como usuario puedo clickear el botón de UNA SOLA tarea a la vez, si intento clickear otro botón de otra tarea está desactivado o no me es permitido
  Como usuario al dar click al botón INICIAR, veo que el estado del botón cambia a PAUSAR
  Como usuario al dar click al botón PAUSAR, veo que el estado del botón cambiar a INICIAR
  Aspectos no funcionales de la historia:

- Historia funcional 5:
  Tarea y contador de tiempo:
  Como tarea cuento con un registro de horas, minutos y segundos de tiempo que transcurrio entre que un usuario dio click iniciar y luego pausar
  Como tarea puedo acumular un tiempo total en que un usuario(s) determinado trabajó en mi (un acumulado o varios acumulados por usuario depende de hacker edition on o)
  Aspectos no funcionales de la historia:

- Historia funcional 6:
  Relación Tarea y Proyecto
  Como usuario puedo ver todas las tareas del proyecto N agrupadas
  Como usuario si una tarea cambia de proyecto N a P entonces la tarea cambia de agrupamiento o conjunto visualmente
  Aspectos no funcionales de la historia:

### -Sprint 3 📋

- Historia funcional 7:
  Estatus de la tarea
  Como usuario puedo ver un estado actual de la tarea
  Como usuario puedo ver un dropdown con una lista de opciones de posibles de estatus para la tarea
  Como usuario puedo cambiar el status de la tarea y se me presentara un paso de confirmación para la acción
  Aspectos no funcionales de la historia:
  Considerar que según las reglas de negocio, una tarea desaparecera del area al cambiar a ciertos estados, y esto podría no ser reversible por el usuario mismo, tal vez se deba considerar un usuario que pueda ver todas las tareas de todos independientemente de su estatus para corregir errores.
  Historia funcional 8:
  Actualización del status de la tarea
  Como usuario al actualizar el estatus de la tarea, el mismo se actualiza en la base de datos
  Como usuario al actualizar el estatus de la tarea, el mismo se actualiza en la API (método POST del cliente de la API)

Aspectos no funcionales de la historia:

### -Sprint 4 📋

- Historia funcional 9:
  Usuario y horas
  Como usuario tengo un conjunto de fechas en las que trabajé en una tarea
  Como usuario por cada fecha tengo un listado de tareas y el tiempo total que trabaje en ellas
  Como usuario el total de horas que trabaje en todas las tareas constituye el 100% de ese día específico
  Aspectos no funcionales de la historia:

- Historia funcional 10:
  Gráfica de pastel por tarea
  Como administrador de la aplicación puedo acceder a una vista o detalle por tarea que existen
  En el detalle de la tarea puedo ver una gráfica de pastel en donde puedo visualizar qué porcentaje de tiempo trabajo cada usuario en ella
  Aspectos no funcionales de la historia:

- Historia funcional 11:
  Reporte
  Como administrador de la aplicación puedo recibir o consultar un reporte cada 24 hrs (a qué hr se hace corte?)
  El reporte contiene un resumen con la siguiente relación:
  Usuario N:
  Tarea X - 2:00 hrs
  Tarea Y - 1:20 hrs
  Total: 3:20 hrs
  Usuario M
  Tarea X - 1:00 hrs
  Tarea Y - 4:50 hrs
  Total: 5:50 hrs
  Sprint 5
  Historia funcional 12:
  Área de proyectos
  Como administrador puedo consultar el tiempo total que constituye la sumatoria de las sumatorias de cada tiempo de usuario en cada tarea
  Total del proyecto = UsuarioN.tarea1.total + UsuarioM.tarea1.total…. + UsuarioN.tarea2.total ….. etc

### -Sprint 5 📋

- Historia funcional 12:
  Área de proyectos
  Como administrador puedo consultar el tiempo total que constituye la sumatoria de las sumatorias de cada tiempo de usuario en cada tarea
  Total del proyecto = UsuarioN.tarea1.total + UsuarioM.tarea1.total…. + UsuarioN.tarea2.total ….. etc

## Herramientas 🛠️

En este proyecto utilizamos:

- [Reactjs](https://reactjs.org/)
- [create-react-app](https://create-react-app.dev/docs/getting-started)
- [Electron](https://www.electronjs.org/)
- [Material-UI](https://material-ui.com/)
- [Extensiones de Visual Studio Code](https://code.visualstudio.com/)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Simple react snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
  - [Live share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Git lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

### Herramientas de comunicacion

     * [Trello](https://trello.com/monserratsalas2/boards)
     * [Slack](https://slack.com/intl/es-mx/)
     * [Hangouts](https://hangouts.google.com/)

### Deploy 📦

Para el deploy utilizamos firehosting de firebase

## Prototipo de alta fidelidad

Realizado en Figma. Basamos el diseño en el branding de 4040apps y en los componentes de Material-UI.

[Link al prototipo](<https://www.figma.com/file/OwlwYTupVQ7WXxdGcivGp1/Task-Manager-(Copy)?node-id=0%3A1>)

![alt text](https://github.com/TeresaC21/TalentApp/blob/develop/img/access.png)

![alt text](https://github.com/TeresaC21/TalentApp/blob/develop/img/home_horizontal.png)

![alt text](https://github.com/TeresaC21/TalentApp/blob/develop/img/home_vertical.png)

![alt text](https://github.com/TeresaC21/TalentApp/blob/develop/img/create_edit_task.png)

![alt text](https://github.com/TeresaC21/TalentApp/blob/develop/img/graphic.png)

\*\* Widget

![alt text](https://github.com/TeresaC21/TalentApp/blob/develop/img/widget.png)

## Organización

### Método de organización

- Revisión grupal del readme
- Establecer prioridades
- Investigar herramientas/documentación
- Establecer acuerdos
- Documento del proyecto
- Definir proridades
- Asignacion de tareas

### Diagrama de flujo en Git Hub

Todas trabajan sobre su rama Develop.
Una vez teniendo algo funcional o su tarea terminada, se hace un pull request hacia la rama develop de la master.
La Develop master Verifica que todo funcione bien y se hace un pull a la Rama master.
Para bajar los cambios de la master, tenemos una rama remota, y bajamos sus cambios.

![alt text](https://github.com/TeresaC21/TalentApp/blob/develop/img/Diagram.png)
