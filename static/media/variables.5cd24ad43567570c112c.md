# Variables

Todas las variables de Go han de utilizarse, por lo que si tenemos alguna sin usar el compilador nos devolverá un error. Esto es especialmente útil cuando estamos refactorizando código legacy.

### Formas de declarar una variable

Tenemos tres formas de declarar una variable en Go:

1. Usando `var` e inicializando en línea.
2. Usando `var` e inicializando más adelante.
3. Usando `:=`

Cuando declaramos una variable en el contexto del paquete tenemos que usar uno de los dos primeros métodos que se describen en el listado anterior.

```go
var i int = 44

func main() {
    fmt.Println(i)
}
```

En el caso de que queramos declarar múltiples variables de golpe, podemos usar la sintaxis `var()`

```go
var (
	num1 int = 1
	num2 int = 2
)
```

**Cunado usar un tipo u otro**

Vamos algunos casos en los que querriamos declarar uno u otro tipo de variable:

1. Cuando queremos declarar una variable para usar más adelante y que además queremos que tenga un tipo y valor definido.
2. Cuando queremos declarar una variable para usar más adelante pero que no tendrá todavía un valor definido.
3. Cuando queremos declarar una variable con un valor definido en el momento pero sin especificar el tipo de la misma.

### Ubicación y nombres de las variables

A la hora de ubicar una variable tenemos que tener bien presentes estas reglas:

1. Cuando estén a nivel de paquete y con minúscula, pertenecen al paquete en el que se encuentran.
2. Cuando estén a nivel de paquete y con mayúscula, serán usadas por paquetes externos al mismo.
3. Cuando estén a nivel de bloque y con minúscula, pertenecen al bloque en el que son declaradas.

La longitud del nombre de la variable es importante, un nombre corto significa que va a usarse enseguida y un nombre largo es que va a ser usada por un largo periodo de tiempo.

Los acronimos tenemos que ponerlos en mayuscula siempre que sea posible (theURL, theHTTPResquest).

### Re-declaración de variables

En Go podemos hacer re-declaraciones de variables si estas perteneces a bloques o contextos diferentes, por ejemplo, el siguiente código daría error, ya que ambas variables han sido declaradas en el mismo bloque.

```go
func main() {
    var i int = 1
    var i int = 2
}
```

Pero sin embargo el siguiente ejemplo es perfectamente válido ya que las variables se declaran en bloques diferentes, en este caso lo que hace Go es sobre-escribir el valor de la misma.

```go
var i int = 1

func main() {
    var i int = 2
}
```

### Conversión de tipos

La conversión de tipos en Go solo puede hacerse de manera explícita, no implícita, y debe realizarse usando el tipo al que vayamos a convertir como una función que recibirá la variable a convertir.

```go
var i int = 22
var j float64

j = float64(i)
```

### Impresión de valores y tipos

Una forma de imprimir valores de variables dentro de una función de impresión es usando el método `Printf` el cual recibe las variables que vamos a querer mostrar y queda en nuestras manos si lo que queremos es mostrar el valor `%v` o el tipo `%T`

```go
var k int = 22
fmt.Printf("%v, %T", k, k)
```
