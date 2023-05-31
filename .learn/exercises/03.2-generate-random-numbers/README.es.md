# `03.2` Genera Valores Aleatorios

En el paso anterior aprendimos cómo generar un número aleatorio entre 0 y 1 (excluyendo ambos). Para poder obtener el número que puede ser utilizado para acceder a los valores del array, debe de ser un entero (sin decimales) y el número debe estar entre 0 y la longitud del array - 1 (Se usa la longitud del array - 1 porque los números de posición empiezan en 0 y no 1)

### Genera números aleatorios entre un rango:

Sabemos cómo obtener números aleatorios, ahora añadamos una variación y obtengamos solo números aleatorios entre un rango específico (entre 2 números). Aquí hay un ejemplo.

```js
// Vamos a generar un número aleatorio entre 1 y 10.
let randomNumber = Math.random() * 10 + 1;
console.log(randomNumber); // Esto va a imprimir un número aleatorio con decimales entre 1 y 10, por ejemplo 3.435 
```

> Estamos multiplicando el número aleatorio por el límite superior del rango y sumando a este resultado el límite inferior del rango.

### Convertir un número flotante en entero:

Para poder convertir un flotante (número con decimales) en entero, podemos usar la función `Math.floor()` de Javascript, que va a obtener solamente la parte entera del número. Aquí hay un ejemplo de como funciona: 

```js
let myFloatNumber = 23.567324;
let myIntegerNumber = Math.floor(myFloatNumber);
console.log(myIntegerNumber); // This will print 23
```

### Generar un número entero aleatorio entre un rango: 

Ahora que ya sabemos cómo generar un número aleatorio entre un rango específico y cómo convertir un flotante en entero, vamos a poder generar un número entero aleatorio que puede ser utilizado para acceder a los valores de un array. Así es como se vería todo en conjunto: 


```js
let randomNumber = Math.floor(Math.random() * upperLimit) + lowerLimit;
```

> Si remplazas el límite superior y el límite inferior de tu rango, entonces vas a poder generar un número entero aleatorio que pertenece al rango.

## 📝 Instrucciones:

1. Genera un número entero aleatorio entre 0 y 4.

## 💡 Pista:

+ Si el límite inferior es 0, entonces no tienes que sumar nada.
