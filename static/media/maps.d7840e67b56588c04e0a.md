# Maps

Los maps son colecciones de pares clave valor, podemos elegir el tipo que queramos con las claves y con los valores, pero una vez definido no podemos cambiarlo.

```go
statePopulations := map[string]int{
    "España":   1,
    "Sueca":    1,
    "Algemesi": 1,
}
```

Podemos usar make para crear un map en un momento determinado y usarlo mas adelante (en un bucle por ejemplo).

```go
m := make(map[string]int)
fmt.Println(m)
```

Podemos acceder a un elemento del map usando su key.

```go
fmt.Println(statePopulations["Sueca"])
```

O agregar un par de key value.

```go
statePopulations["Alzira"] = 22
```

Para eliminar un par clave valor usamos delete.

```go
delete(statePopulations, "Sueca")
fmt.Println(statePopulations)
```

Los maps no se ordenan como los array, no se garantiza que el orden en el que vuelvan sea siempre el mismo.

Si consultamos por una clave que no existe Go devolvera el valor por defecto del tipo definido (int, 0) y el estado de si lo a encontrado o no como `bool`. Es una buena practica ponerle de nombre a este estado del resultado de la búsqueda `ok`

```go
pop, ok := statePopulations["oho"]
fmt.Println(pop, ok) // 0, false
```

Podemos obtener la longitud de los map usando la funcion len.

```go
fmt.Println(len(statePopulations))
```

Los maps se pasan por refernecia por lo que si lo copiamos o pasamos y modificamos este, se modificara el elemento original.

```go
statePopulations := map[string]int{
    "España":   1,
    "Sueca":    1,
    "Algemesi": 1,
}
c := statePopulations

delete(c, "Algemesi")

fmt.Println(statePopulations) // map[Alzira:22 España:1]
fmt.Println(c)                // map[Alzira:22 España:1]
```
