# Introducción

Go es un lenguaje compilado, esto quiere decir que debe compilarse antes de poder se ejecutado, partamos desde un ejemplo para ver este concepto:

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello world")
}
```

Como verás este programa pinta una frase en consola, para poder ejecutarlo podemos hacer dos cosas, lanzar el comando `go run nombre_archivo.go` el cual compila y ejecuta el archivo que pasemos como argumento o `go build nombre_archivo.go` el cual compila pero no ejecuta el archivo que le pasamos como argumento.

El archivo compilado es un archivo binario por lo que su ejecución es muy rápida. Esta compilación es realizada por el interprete de Go que previamente tenemos que instalar en nuestro sistema operativo.
