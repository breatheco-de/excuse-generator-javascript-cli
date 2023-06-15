# `06` Concatenar Strings

El mejor enfoque para este proyecto es dividir nuestra excusa por su estructura, usando un array para cada oración, para que podamos obtener un valor diferente para cada una de ellas.

Podemos dividir nuestra excusa por **who** (**quién**) la hizo, **what** (**qué**) pasó, **when** (**cuando**) pasó. Si ese es el caso, podemos tener un array para valores diferentes de **quién**, otro para valores diferentes de **qué**, y otro para valores diferentes de **cuando**. Todo junto se vería así:

```js
let who = ['The dog','My granma','His turtle','My bird'];
let what = ['ate','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
```

Con un array para cada parte de la estructura de la excusa, podemos generar muchas combinaciones diferentes entre ellas para obtener más excusas.

Volviendo a nuestro problema, ya sabemos cómo generar un valor aleatorio de un array, pero en este caso, necesitamos obtener un valor aleatorio de 3 arrays diferentes. Para generar una excusa de estos valores, tenemos que ponerlos juntos en una string, ¡ahí es exactamente donde la concatenación entra en acción!

## 📝 Instrucciones:

1. Añade este nuevo array junto a `developer`:

```js
let jobTitle = ["Software developer", "Technical lead", "Data scientist", "CTO"];
```

2. Obtén un valor aleatorio de cada uno de los arrays (`developers` y `jobTitles`) y concaténalos para obtener una frase con esta estructura:

```js
{developer} is our {jobTitle}
```

3. Imprime el array resultante en la consola.

## Salida esperada:

```js
"Karla is our CTO"
"Alex is our Technical lead"
"Joe is our Software developer"
```

> Ten en cuenta que todos estos son posibles salidas. En tu caso, solo debes imprimir una, pero como va a ser generado aleatoriamente, debe de ser diferente cada vez que los construyas.

## 💡 Pista:

+ Puedes concatenar strings usando `+` o con los backsticks.