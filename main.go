package main

import "fmt"

// Define a function type that matches the signature of Tambah
type Operation func(int, int) int

func Tambah(a int, b int) int {
	return a + b
}

func SetHasil(a int, b int, c Operation) {
	fmt.Println("Menghitung")

	hasil := c(a, b)
	fmt.Println(hasil)
}

func main() {
	SetHasil(4, 3, Tambah)
}
