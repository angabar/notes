# Arrays

Los arrays son colecciones de variables pertenecientes todas al mismo tipo y de un tamaño definido.

```go
grades := [3]int{1, 2, 3}
```

Si lo que queremos es definir el tamaño del array a la hora de poner los valores iniciales podemos usar el operador `...` donde definiamos el tamaño del array.

```go
grades := [...]int{1, 2, 3}
```

Podemos definir un array sin valores por defecto e ir añadiendolos más adelante.

```go
var students [3]string
students[0] = "Lisa"
```

O guardar un array dentro de un array para tener así una matriz.

```go
var matrix [3][3]int = [3][3]int{{1, 1, 0}, {1, 0, 0}, {0, 0, 0}}
fmt.Println(matrix)
```

### Longitud

Para poder determinar la longitud de un array debemos recurrir a la función `len()` la cual recibe como argumento el array a calcular.

```go
grades := [3]int{1, 2, 3}
fmt.Println(len(grades)) // 3
```

### Paso por copia

Los arrays en Go son pasados por copia, no por referencia, por lo que si guardamos un listado en una variable nueva y lo modificamos, estamos modificando la copia, no el array original. Esto pasa también al pasarlo dentro de una función.

```go
a := [...]int{1, 2, 3}
b := a
b[1] = 5
fmt.Println(a) // [1, 2, 3]
fmt.Println(b) // [1, 5, 3]
```

En el caso de que queramos pasar una referencia del array en lugar de una copia, podemos hacer uso de los punteros `&` y guardar o pasar la dirección de memoria en lugar del array en si. Puedes ver más información de los punteros en la sección correspondiente.

```go
a := [...]int{1, 2, 3}
b := &a
b[1] = 5
fmt.Println(a) // [1, 5, 3]
fmt.Println(b) // [1, 5, 3]
```

### Cortes

Podemos crear cortes en un array usando el operador de acceso `[]` tan solo tenemos que poner la posición de incio y de fin separadas por dos puntos y listo. En el caso de que no pongamos posición de inicio se toma el `0` y en el caso de que no pongamos posición de fin se toma la última posición del array.

```go
s := [3]int{2, 3, 4}

c := s[:1]
fmt.Println(c)
```

### Slices

Los slices son arrays sin una dimensión definida que además se copian y se pasan por referencia no por copia. Debemos tener en cuenta que Go usa arrays por debajo de los slices.

```go
s := []int{2, 3, 4}
```

Todo lo que hemos comentado sobre los arrays (menos el paso o copia por copia) es aplicable a los slices.

### Agregar elementos a un slice

Como no tienen un tamaño definido, podemos agregar más elementos a un slice a medida que lo necesitemos. Para ello tenemos que usar la función `append` la cual recibe el slice a modificar y los elementos que queramos poner en el mismo.

```go
k := []int{}
k = append(k, 22)
fmt.Println(k) // [22]
```

Observa bien que el resultado del `append` lo estamos guardando de nuevo en la variable `k` esto es porque Go no modifica el slice original, sino que devuelve un array nuevo con los elementos introducidos y nosotros somos los que lo tenemos que guardar en alguna parte.

### Función `make`

La función `make` es una función que permite la creación de slices definiendo el tipo, el tamaño y su capacidad.

```go
m := make([]int, 3, 100)
```

### Operador spread

El operador `spread` puede usarse en los arrays y slices para definir "el contenido del array" veamos un ejemplo:

```go
o := []int{2, 3}
q := []int{4, 5}
o = append(o, q...)
fmt.Println(o) // [2, 3, 4, 5]
```

### Diferencias entre la longitud y la capacidad de un array

Un slice usa por debajo un array, `len` es el numero de elementos presentes en el array y `cap` es la capacidad del array al que Go asigna al slice, cuando definimos una capacidad determinada con make Go lo que hace es reservarnos un array con "n" capacidad, si en algun momento guardamos mas elementos de lo que habiamos dicho inicialmente Go hara una reasignacion de memoria y aumentara su capacidad esto aunque parezca algo bueno en realidad afecta al rendimiento por lo que no es algo de lo que debamos abusar

```go
// Definimos un slice con capacidad de 3
s := make([]int, 0, 3)
for i := 0; i < 5; i++ {
    s = append(s, i)
    fmt.Printf("cap %v, len %v, %p\n", cap(s), len(s), s)
}

// Observa como cuando superamos los 3 elementos Go reasigna el array en memoria
// cap 3, len 1, 0x1040e130
// cap 3, len 2, 0x1040e130
// cap 3, len 3, 0x1040e130
// cap 6, len 4, 0x10432220
// cap 6, len 5, 0x10432220
```
