function auto(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}
var autos = [];

for (var i = 0; i < 30; i++) {
  var marca = prompt("ingresa la marca del auto");
  var modelo = prompt("ingresa el modelo del auto");
  var año = prompt("ingresa el año del auto");
  autos.push(new auto(marca, modelo, año));
}

for (var i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}