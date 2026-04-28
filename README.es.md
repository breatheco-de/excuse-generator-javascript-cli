<!--hide-->
# El generador de excusas CLI (en Javascript) 
<!--endhide-->

Disneylandia para procrastinadores y perezosos.

¡Este proyecto es ideal para evitar a alguien molesto, no requiere más de 20 líneas de código y puede salvarte por el resto de tu vida!

## El Objetivo

Queríamos un proyecto que usara muy poco Javascript, pero aun con una aplicación muy divertida, el generador de excusas toma 20 líneas de código, es súper simple de entender y es el primer proyecto perfecto para cualquier desarrollador principiante.

<how-to-start>
 
## 🌱  ¿Cómo iniciar este proyecto?

1. Asegúrate de tener una cuenta de Github en: https://github.com
2. Recomendamos abrir este repositorio usando una herramienta de aprovisionamiento como [Codespaces](https://4geeks.com/es/lesson/tutorial-de-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/es/lesson/como-utilizar-gitpod). Alternativamente, puedes clonarlo en tu computador local usando el comando `git clone`.


Este es el repositorio que necesitas abrir o clonar:

```
https://github.com/breatheco-de/excuse-generator-javascript-cli
```

**👉 Sigue estos pasos en **[cómo iniciar un proyecto de programación](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).

3. Los ejercicios comenzarán y mostrarán las instrucciones automáticamente, pero si encuentras algún problema, puedes intentar ejecutarlos manualmente escribiendo en tu línea de comando lo siguiente:

```bash
$ learnpack start
```
</how-to-start>
## Instrucciones
 
Por favor, crea un script de Javascript que genere una excusa cada vez que se ejecute.

## Discute con tus compañeros de clase la estrategia primero

¿Cómo podemos generar una excusa? ¿Cómo se construyen las oraciones?

![Explicación del generador de excusas](https://github.com/breatheco-de/tutorial-project-excuse-generator-javascript/blob/master/explanation.gif?raw=true)

¡La idea es generar cada parte de la oración aleatoriamente para obtener buenas excusas!

## Pista

1. Crea un archivo `app.py` con una excusa programada en una variable.
2. La excusa debe estar en una variable:
```js
let excuse = 'The dog eat my homework when I finished';
```
3. Usando Javascript, crea una función que genere y devuelva una excusa aleatoria con la siguiente estructura:
```js
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
```
4. Para crear una excusa consistente, debes concatenar un elemento de cada array en el orden correcto.
5. Imprime la excusa en la consola usando la función `console.log()`.

## Tecnologías

Javascript.

## Fundamentos

Este ejercicio cubre los siguientes fundamentos:

1. Correr archivos Javascript.
2. Cómo trabajar con Arrays.
3. Generar números aleatorios.
4. Concatenar strings.
5. Usar funciones (al menos un poco).
