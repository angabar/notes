# Structs

Un `struct` es una estructura de tipos que conforman un objeto, podemos anidar esto de las manera que queramos, incluso crear un struct dentro de otro `struct`

Los struct siguen las mismas convenciones que las variables a la hora de definir los nombres de las mismas, con la peculiaridad de que si queremos que el tipo y sus propiedades sean exportables tenemos que poner el tipo y sus propiedades en mayuscula, de lo contrario solo estaremos exportando el tipo.

```go
type Doctor struct {
	Number     int
	ActorName  string
	Companions []string
}
```

En un `struct` se puede prescindir de las claves a las que hacen referencia las propiedades, pero no es nada recomendable. Usa siempre las claves a la hora de definirlos.

```go
aDoctor := Doctor{
    Number:     3,
    ActorName:  "Perico",
    Companions: []string{"test", "test2"},
}
```

Para consultar un atributo usamos el punto `.`

```go
fmt.Println(aDoctor.Number)
```

Los `struct` también pueden ser anónimos, estos se declarán de la siguiente forma.

```go
person := struct{ name string }{name: "Perico"}
fmt.Println(person)
```

A diferencia de los map, los struct son pasados o copiados por copia, no por referencia, por lo que modificar uno no alterara el otro, al igual que con los array, si quisieramos modificar tambien el elemento original, tendriamos que guardar o pasar la direccion de memoria, no el elemento en si.

### Inheritance

En Go no tenemos herencia, pero podemos inyectar un struct en otro para que este disponga de las propiedades del otro.

```go
type Animal struct {
	Name   string
	Origin string
}

type Bird struct {
	Animal
	SpeedKPH float32
	CanFly   bool
}

b := Bird{
    Animal: Animal{
        Name:   "jaja",
        Origin: "Idont know",
    },
    SpeedKPH: 23.2,
    CanFly:   true,
}

fmt.Println(b.Animal.Name)
fmt.Println(b.SpeedKPH)
```
