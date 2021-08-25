var articulos =  //array
  [
    { nombre: "Bici", costo: 3000 },    //1 objeto
    { nombre: "Tv", costo: 2500 },      //2 objeto
    { nombre: "Libro", costo: 320 },    //3 objeto
    { nombre: "Celular", costo: 10000 },//4 objeto
    { nombre: "Laptop", costo: 20000 }, //5 objeto
    { nombre: "Teclado", costo: 500 },  //6 objeto
    { nombre: "Audifonos", costo: 1700 }//7 objeto
  ];

var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500  //este metodo filter esta generando un nuevo array llamado articulosFiltrados
}                               //con los articulos que tenga el costo menor o igual a 500
);

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;  //este metodo map esta generando un nuevo array llamado nombreArticulos
});                        //me esta mapeando en el array articulo todos los nombre de 
//dichos articulos.

var encuentraAticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Laptop"; //este metodo find esta generando un nuevo array llamado encuentraArticulo
});                   //y el metodo find se encarga de buscar el articulo llamado laptop

articulos.forEach(function (articulo) {
  console.log(articulo.nombre); // este metodo forEach este no genera un nuevo array,
});                   //este metodo recorre los articulos y me imprime el nombre de los
//articulos que tengo en el array.

var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;  //este metodo nos regresa una validacion de verdadero o falso
});                     //tambien va generar un nuevo array llamado articulosBaratos
                        // nos va regresar un true o false si la condicion es verdadera o falsa