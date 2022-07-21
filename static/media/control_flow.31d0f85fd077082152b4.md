# Estructuras de control

En Go siempre tenemos que tener bloques definidos con corchetes aunque solo haya una expresión en ellos.

```go
if false {
    fmt.Println("The test is true")
}
```

Podemos definir declaraciones en el propio if y usarlo tanto en el condicional como en el bloque, separando la declaración y el condicional con un punto y coma.

```go
statePopulations := map[string]int{
    "Perico": 100,
    "test":   5,
}

if pop, ok := statePopulations["test"]; ok {
    fmt.Println(pop)
}
```

### Criterios de condicionales

En Go podemos usar los mismos operadores condicionales y lógicos que en el resto de lenguajes de programación `&&` `||` `==` `!=` etc.

En Go cuando una condición cumple con `true` y va ligada con operadores `||` el resto no se evalua, ya que está claro que ha de entrar en el bloque.

Tenemos el mismo caso para el operador `&&` pero a la inversa, en este caso si encuentra un `false` el resto ya no se evalua.

```go
guess := -5

// "Returning true" no se mostrará ya que la priemra condición ya es true
func isTrue() bool {
	fmt.Println("Returning true")
	return true
}

if guess < 0 || isTrue() {
    fmt.Println("test done!")
}
```

Los `else` y `else if` funcionan exactamente igual que en cualquier lenguaje de programación.

### Números decimales

Es una mala práctica hacer comparaciones de igualdad o desigualdad en números decimales ya que no se guardan de manera exacta en memoria, en este caso hacemos el cuadrado y después la raiz cuadrada, podemos pensar que entrará en el `if` pero no, ya que hay perdida de decimales en la conversión.

```go
num := 0.123

if math.Pow(math.Sqrt(num), 2) == num {
    fmt.Println("These are the same")
} else {
    fmt.Println("These are different")
}
```

### `switch`

En un switch no es necesario poner `breaks` (este viene implícito) ni bloques con corchetes y al igual que en los `if` dentro del condicional podemos hacer declaraciones siempre que usemos el punto y coma para separarlos.

```go
switch i := 2 + 2; i {
case 1:
    fmt.Println("one")
case 2:
    fmt.Println("two")
// En Go no se pueden hacer agrupamientos de case, pero si podemos separar
// los posibles valores por comas
case 3, 4, 5, 6:
    fmt.Println("three, four, five, six")
default:
    fmt.Println("no one or two")
}
```

No es necesario que el condicional este en el `switch` puede venir de fuera, y en el caso de que queramos ignorar el `break` implícito y que se ejecute si o si el siguiente case (aunque el condicional sea false) tenemos que usar `fallthrough`

```go
i := 10

switch {
case i <= 10:
    fmt.Println("less or equal than 10")
    fallthrough
// Aunque no se cumpla la condición, entrará en el case por el fallthrough
// de la línea anterior
case i >= 20:
    fmt.Println("less or equal than 20")
default:
    fmt.Println("nothing")
}
```

### Tipo de variable

En Go podemos obtener el tipo de una variable usando la expresión `variable.(type)` y combinar esto con un `switch` observa que para ello el tipo de la variable a de ser `interface`

```go
var n interface{} = 3
switch n.(type) {
case int:
    fmt.Println("Is an int")
    // En los casos en que queramos salir del bloque antes de pasar al
    // siguiente case, usaremos la expresión break
    break
    fmt.Println("I dont wanna execute this")
default:
    fmt.Println("Is another type")
}
```
