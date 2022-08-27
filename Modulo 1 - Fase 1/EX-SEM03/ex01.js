var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ]

listaNumeros.forEach((numero, indice)=> {
  listaNumeros[indice] = numero * 2;
})

console.log(listaNumeros)