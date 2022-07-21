# Bucles

El clasico bucle `for` es uno de los tipicos en Go, funciona igual que en el resto de lenguajes de programación.

```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```

Podemos también tener un buble `for` de dos variables de la siguiente forma, cuidado, cuando usamos dos variables no podemos usar el incremento (++).

```go
for i, j := 0, 0; i < 5; i, j = i+1, j+2 {
    fmt.Println(i, j)
}
```

Aunque no es una buena practica (para no crear bucles infinitos), podemos incluso interactuar con el contador.

```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
    if i%2 == 0 {
        i /= 2
    } else {
        i = 2*i + 1
    }
}
```

### Extracción de partes del `for`

Podemos prescindir de algunas partes del `for` como del inicializador o del contador, poniendolos fuera de este.

```go
p := 0
for p < 5 {
    fmt.Println(p)
    p++
}
```

Sino ponemos nada de nada, el bucle es infinito sino lo paramos nosotros. Podemos usar la expresión `break` para salir del bucle en el que estamos o `continue` para continuar a la siguiente iteración.

```go
o := 0

// Cuidado con los bucles infinitos
for {
    fmt.Println("o vale", o)
    o++

    if o == 5 {
        break
    }
}

for i := 0; i < 5; i++ {
    if i%2 == 0 {
        continue
    }

    fmt.Println(i)
}
```

### Anidación de bucles

Los bucles también pueden ponerse de manera anidada, unos dentro de otros.

```go
for i := 0; i < 3; i++ {
    for j := 0; j < 3; j++ {
        fmt.Println(i * j)
    }
}
```

El `break` nos hace salir del bucle en el que estamos, pero si estamos a más de un nivel de anidación solo saldremos del primer nivel, si lo que queremos es salir de todos, tendremos que usar etiquetas, la etiqueta asocia un bucle a un nombre y al decir `break` tag_name decimos sal de blucle asociado a esta etiqueta.

```go
Loop:
	for w := 0; w < 5; w++ {
		for q := 0; q < 5; q++ {
			if q == 3 {
				break Loop
			}
		}
	}
```

### Bucle `range`

Otro tipo de bucle es el bucle `range` el cual es perfecto para `slices` `arrays` `maps` y `strings` ya que nos permite acceder tanto a la clave como al valor asociado a dicha clave.

```go
s := []int{1, 2, 3}

for k, v := range s {
    fmt.Println(k, v)
}

statePopulations := map[string]int{
    "test":  1,
    "test2": 2,
}
for k, v := range statePopulations {
    fmt.Println(k, v)
}

x := "test"
for k, v := range x {
    fmt.Println(k, v)
}
```
