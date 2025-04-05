// Tipos de datos primitivos

// 1.- String (cadena de texto)
let name = "Brais Moure"
let alias = 'MoureDev'
let email = `braismoure@mouredev.com`

// 2.- Números
let age = 37 // Entero
let height = 1.77 // Decimal

// 3.- Booleanos
let isStudent = false
let isTeacher = true

// 4.- Undefined Nos interesa cuando no inicializamos la variable
let undefinedValue
console.log(undefinedValue)

// 5.- Null. Intencionadamente tiene una ausencia de valor en ese punto
let nullValue = null

// 6.- Symbol. Valores únicos para crear propiedades y evitar colisiones
let mySymbol = Symbol("mysymbol")

// 7.- BigInt
let myBigInt = BigInt(3458345593845793485783948587394578345345345345)
let myBigInt2 = 3458345593845793485783948587394578345345345345n

// Mostramos los tipos de datos
console.log(typeof name)
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isStudent)
console.log(typeof isTeacher)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)
