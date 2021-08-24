var miAuto =
{
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.año}`);
  }
};

function auto(marca, modelo, año)//funcion constructora
{
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020); //generamos una nueva instancia
var autoNuevo2 = new auto("Tesla", "Model x", 2018);
var autoNuevo3 = new auto("Toyota", "corolla", 2020);

