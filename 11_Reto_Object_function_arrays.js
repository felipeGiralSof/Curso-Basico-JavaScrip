var miAuto = {
  marca: "toyota",
  modelo: "corolla",
  año: 2010
}

function auto(marca, modelo, año) { //funcion constructora
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}
var autos = []; //array donde vamos a guardar los 30 autos

for (var i = 0; i < 30; i++) {  //ciclo para guardar los 30 carros 
  var mar = prompt("digita la marca");
  var mod = prompt("digita el modelo");
  var año = prompt("digita el año");
  autos.push(new auto(mar, mod, año));
}

for (var i = 0; i < autos.length; i++) { //ciclo para mostrar los 30 carros 
  console.log(autos[i]);
}