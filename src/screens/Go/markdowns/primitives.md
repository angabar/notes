# Tipos primitivos

Los tipos primitivos en Go son siete `bool` `int` `uint` `float` `ufloat` `complex` `string` pasemos a ver las características de cada uno.

### `bool`

El tipo `bool` se usa para hacer referencia a tipos `boolean` el cual puede admitir tres tipos de valores `true` `false` u operaciones lógicas como `3 < 5` o `2 == 2`

El valor por defecto en caso de no inicializarse es `false`

### `int`

El tipo `int` se utiliza para guardar número enteros y puede definirse de manera genérica o de manera específica, en caso de generarse de manera genérica tan solo tenemos que usar `int` para el caso de definirlos de manera específica tendremos que especificar además el número de bytes que será capaz de almacenar, estos pueden ser 8, 16, 32 o 64.

```go
// int genérico
var n1 int = 2

// int específico
var n2 int8 = 10
```

El valor por defecto en caso de no inicializarse es `0`

**Combinación de tipos**

Debemos tener en cuenta que para realizar operaciones aritméticas, todas las variables han de tener el mismo tipo y esto no solo incluye el tipo general sino también la específica en caso de que la tenga.

```go
var int8 n1 = 2
var int16 n2 = 4

fmt.Println(n1 + n2) // Error, tipos diferentes
```

Para poder hacer este tipo de operaciones, antes tenemos que hacer una conversión a un tipo común.

### `uint`

El tipo `uint` se usa para representar valores enteros positivos, no permiten negativos pero tienen la ventaja de que permiten guardar números más altos al no considerar los negativos.

Todo lo especificado en los `int` se aplica de igual manera a los `uint`

### `float`

El tipo `float` se usa para representar números con decimales, tan solo podemos definirlos usando el tipo específico de 32 y 64 bytes teninendo en cuenta que si hacemos alguna operación aritmética tiene que ser del mismo tipo.

El valor por defecto en caso de no inicializarse es `0`

```go
var n1 float32

fmt.Println(n1) // 0
```

> En los tipos `float` no podemos hacer uso del operador resto (%).

### `complex`

Los números complejos son aquellos que hacen uso de número imaginarios, para poderlos usar en Go utilizamos el tipo `complex` ya sea en el modo 64 o 128 bytes, también en su forma de función donde recibe dos número decimales.

El valor por defecto en caso de no inicializarse es `(0+0i)`

### `string`

El tipo `string` se usa para guardar cadenas de texto que representamos entre comillas dobles, todos los `string` en Go son representados como `arrays` de carácteres individuales a los que podremos acceder pero no alterar, ya que estos son inmutables.

```go
var t string = "My text"

fmt.Println(t[1]) // y
t[4] = "a" // Error!
```

**Concatenar `string`**

Podemos unir diferentes `string` en uno solo usando el operador `+`

```go
var t1 string = "My text"
var t2 string = "as instance"

fmt.Println(t1 + t2)
```

**Conversión a `byte`**

Podemos convertir nuestro `string` en un `array` de `byte` ya que son derviados.

```go
var t string = "My text"
var pt []byte(t)
```
