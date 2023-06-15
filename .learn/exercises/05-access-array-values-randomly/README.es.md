# `05` Acceder a los Valores de un Array Aleatoriamente

Hasta ahora hemos aprendido cómo generar números enteros aleatorios y a acceder a valores de un array usando la posición del elemento. 

Entonces, si utilizamos todo lo que hemos aprendido hasta ahora, podemos acceder a los valores aleatorios de nuestro array.

Retrocediendo a cómo generamos anteriormente números enteros aleatorios dentro de un rango, teníamos algo similar a esto:

```js
let randomNumber = Math.floor(Math.random() * upperLimit) + lowerLimit;
```

Entonces, si queremos usar este número aleatorio para obtener un valor de un array, entonces el rango del número debería estar entre 0 y la longitud del array - 1. El código se verá algo así: 

```js
let names = ["Hannah", "John", "Alejandro"];
let randomArrayPosition = Math.floor(Math.random() * names.length);
```

Y esta `randomArrayPosition` (posición aleatoria del array) que generamos puede ser utilizada para acceder a un valor de un array.

## 📝 Instrucciones:

1. Genera un número aleatorio que pueda ser utilizado para acceder a un valor del array `developers`. 

2. Utiliza esa posición aleatoria generada para acceder a un valor del array `developers` e imprime el valor en la consola. 

## 💡 Pista:

+ Recuerda que el número aleatorio utilizado como posición para acceder a un valor del array debe estar entre 0 y la longitud del array.
