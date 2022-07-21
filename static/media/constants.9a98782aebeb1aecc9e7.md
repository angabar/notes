# Constantes

En Go podemos crear constantes, que son como variables pero con la condición de que su valor es inmutable. En cuanto al tema de nombramiento de constantes y shadowing son idénticas a las variables.

### Datos compilados

Un punto importante de las constantes de Go es que no pueden guardar datos a compilar, es decir, todo lo que se guarde en una constante ha de conocerse en el punto de declaración de la misma.

```go
// Este código es válido
const seconds = 120
const minutes = seconds / 60

// Sin embargo este código no
func addMinutes(minutes int) {
    // No sabemos el valor de minutes en el momento de la compilación
    // por lo tanto no puede usarse para guardarse en una constante
	const more = minutes + 60
	return more
}
```

Precisamente por este factor, las constantes son más eficientes a la hora de ejecutarse que las variables.

### Definición sin especificar

Al igual que con las variables, las constantes pueden definirse sin especificar un tipo, una de las ventajas de hacerlo de este modo es que podemos operar sobre constantes o variables que si tienen un tipo definido.

```go
const a = 2
const b int16 = 3

fmt.Println(a + b)
```

### Asignación por defecto

En Go podemos definir las constantes usando un bloque `const()` como en las variables haciamos usando el bloque `var()`. Pues bien, una de las particularidades de crear variables de este modo es que Go asigna automáticamente el valor asignado a la primera variable o constante al resto del bloque.

```go
// b y c también valen 2
const (
	a = 2
	b
	c
)
```

Una de las propiedades que podemos usar para sacar ventaja de esta particularidad es `iota` la cual representa la cadena de enteros sumada por defecto a `+1` de este modo podemos asignar un entero de manera automática.

```go
// z vale 1, w vale 2 y t vale 3
const (
	z = iota
	w
	t
)
```
