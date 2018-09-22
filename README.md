# 23People.io

Sitio web desarrollado para la empresa 23People según los requerimientos solicitados.


## Pre-requisitos

- NodeJS
- NPM
- GIT


### Instalación

Una vez instalado los programas de pre-requisitos.
Abrir una nueva terminal y ejecutar el siguiente comando para descargar el proyecto

```
$ git clone https://github.com/RafaelRojasCov/23People.git
```

Luego debemos entrar a la carpeta mediante

```
$ cd 23People
```

Y luego instalamos los paquetes de NPM necesarios para ejecución del proyecto

```
$ npm install
```


### Desarrollo

Para poder ejecutar el proyecto en ambiente desarrollo simplemente ejecutamos

```
$ npm start
```

### Productivo

**Requisitos para el servidor**

- NodeJS
- NPM

Para poder obtener los archivos estáticos compilados desde DEV ejecutamos

```
$ npm run build
```

Con lo anterior, se nos creará una carpeta llamada "build" dentro del proyecto,
estos archivos ya minificados son el compilado que viene listo para ser puesto en producción

**Ejecución en el servidor**

Una vez generado el compilado para poner el proyecto en marcha ejecutamos

```
$ npm install -g serve
$ serve -s build
```