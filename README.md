# Frontend prueba técnica

## Datos generales :paperclip:
**El presente repositorio funciona en conjunto con el repositorio "alfatec_backend"

## Tecnologías y dependencias
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![NodeJS](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Node) [![NPM](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=flat)](https://docs.npmjs.com/) [![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=flat)](https://getbootstrap.com/docs/4.1/getting-started/introduction/) [![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat)](https://axios-http.com/docs/intro) [![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat)](https://react.dev/learn) [![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff&style=flat)](https://redux.js.org/introduction/getting-started) [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/Git)


## Indice 

- [Descripción general del proyecto :speech_balloon:](#descripción-general-del-proyecto)

- [Diseño :computer:](#diseño) 

- [Vistas y Funcionamiento :arrow_forward:](#vistas-y-funcionamiento)

- [Errores conocidos :no_entry:](#errores-conocidos) 

- [Recursos alternativos y fuentes :art:](#recursos-alternativos-y-fuentes)  

#

### Descripción general del proyecto

Propuesto el proyecto de desarrollar una aplicación web para la gestión de un centro médico, el presente repositorio supone la sección frontend del mismo. En esta sección ha de poder: accederse a la información de profesionales, pacientes y sus pólizas de seguro, a través de un sistema que agrupe esta iformación por pestañas; modificar esta información; añadir nuevas entradas con futuros profesionales, pacientes y pólizas así como eliminarlas y por último disponer de una funcionalidad especial capaz de discriminar para eliminar de entre los profesionales a aquellos que sean médicos.

### Diseño

Dispuestos a desarrollar una aplicación web en la que se distinga entre dos tipos de usuarios que serían profesionales y pacientes. En un principio optamos por desarrollar una base de datos relacional en la que constase una tabla de usuarios y a cada entrada de ésta, se vincularía una entrada de una tabla de pacientes o de otra tabla de profesionales (además de las respectivas pólizas si fuese un paciente). Sin embargo en fecha 3/11/23 se estimó que este diseño supondría la dificultad de tener que eliminar en cascada tanto las entradas de usuarios como las del paciente o profesional vinculado cuando quisiésemos eliminar a alguien de la base de datos. En base a ello se procedió a refactorizar el proyecto eliminando la tabla usuarios y mostrando en una vista a todos los pacientes y en otra vista a todos los profesionales. En el repositorio se incluyen los archivos anteriores a la refactorización (marcados como "desestimado") por si se valorase examinarlos.

Esta aplicación se ha desarrollado con una interfaz de programación *API RESTful*, siguiendo además un patrón de arquitectura de software *Modelo Vista Controlador*. Además se ha optado por la reutilización de elementos como *Inputs*.

### Vistas y funcionamiento

Al entrar en la aplicación nos encontramos con la vista **Pacientes**, en la que, tras hacer una llamada al backend para traernos la información de todos los pacientes registrados, se nos muestra un *infinitescroll* con tarjetas en las que se reflejan sus datos más básicos para identificarlos. Además en estas mismas tarjetas encontramos 3 botones: un boton "examinar" que almacenaría en *redux* la información del paciente concreto de la tarjeta y navegaría a la vista  **Mostrar paciente**; un botón modificar que también almacenaría en redux tal información pero navegaría a la vista **Modificar paciente**; por último un botón "eliminar" que abriría un modal en el que son pediría confirmación para eliminar al paciente de la base de datos. Por último en esta vista contaríamos con un botón "añadir paciente" en el subencabezado que nos conduciría a la vista **Pacienteadd**.

![pacientes](https://iili.io/JBwrxov.md.jpg)

La vista paciente add simplemente constaría de una serie de inputs en los que se solicitarían los datos para generar un paciente nuevo y un botón para llevarlo a cabo.

La vista modificar paciente importaría de redux los datos del paciente para mostrarlos como valor por defecto en unos inputs, que tras modificar y pulsar el botón "modificar el paciente", se enviarían al backend con el *Id* del paciente para modificarlo.

![modificar paciente](https://iili.io/JBwghZv.md.jpg)

La vista Mostrar paciente funcionaría importando de redux la información del paciente allí almacenado a través de la vista pacientes y llamando al backend para traer las pólizas asociadas al mismo. Una vez disponiendo de los datos, a través de un *hook* del tipo *useState* que gestionaría la selección entre tres pestañas diferentes: "datos personales" que mostraría los datos personales del paciente seleccionado; "dirección" que mostraría los datos relativos a la dirección del paciente seleccionado y por último "pólizas" que mostraría un infinite scroll con las polizas del paciente seleccionado. Además en el subencabezado contaría con un botón "añadir póliza al paciente" con el que navegar a la vista **Poliza add**, donde mediante inputs y un *dropdown* se nos pediría los datos para añadir una nueva póliza vinculada al paciente que importamos de redux.

![mostrar paciente](https://iili.io/JBwggus.md.jpg)

![polizas](https://iili.io/JBwrwOu.md.jpg)

![poliza add](https://iili.io/JBwrEil.md.jpg)

Por otra parte en el encabezado encontramos en todo momento tanto un botón "pacientes" que nos reconduciría a la respectiva vista, como un botón "profesionales" que nos serviría para navegar a la vista **Profesionales**. Esta vista funcionaría de un modo similar a la vista pacientes, pero mostrando los profesionales en este caso. Pero además de contar con el botón "añadir profesional", que nos conduciría a la vista **Profesional add** equivalente a paciente add pero generando profesionales (con un dropdown para escoger el tipo de profesional), también encontramos un botón "borrar médicos" que abriría un modal en el que se nos pediría confirmación para eliminar todos los profesionales del tipo "médico". Cabiendo matizar que en la vista **Mostrar profesionales** no existiría la pestaña pólizas, por estar éstas asociadas únicamente a pacientes.

![profesionales](https://iili.io/JBwrQWv.md.jpg)

![profesional add](https://iili.io/JBwrSfV.md.jpg)

![mostrar profesional](https://iili.io/JBwgytj.md.jpg)

### Errores conocidos


### Recursos alternativos y fuentes

https://tutorialmarkdown.com/emojis

https://badges.pages.dev/

https://freeimage.host/
