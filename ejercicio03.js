const productos = ["Monitor", "Teclado", "Mouse", "Auriculares",
 "Altavoces", "Micrófono", "Webcam", "Disco Rígido", "SSD",
 "Tarjeta Gráfica", "Microprocesador", "Memoria RAM", "Fuente",
"Fan Cooler", "Motherboard"];

const productosEnVenta = [
    {id: 2000, nombre: "Monitor", importe: 743, stock: 45},
    {id: 2001, nombre: "Teclado", importe: 513, stock: 28},
    {id: 2002, nombre: "Mouse", importe: 842, stock: 18},
    {id: 2003, nombre: "Auriculares", importe: 147, stock: 64},
    {id: 2004, nombre: "Altavoces", importe: 30, stock: 10},
    {id: 2005, nombre: "Micrófono", importe: 562, stock: 72},
    {id: 2006, nombre: "Webcam", importe: 388, stock: 91},
    {id: 2007, nombre: "Disco Rígido", importe: 898, stock: 97},
    {id: 2008, nombre: "SSD", importe: 951, stock: 84},
    {id: 2009, nombre: "Tarjeta Gráfica", importe: 843, stock: 71},
    {id: 2010, nombre: "Microprocesador", importe: 684, stock: 51},
    {id: 2011, nombre: "Memoria RAM", importe: 824, stock: 59},
    {id: 2012, nombre: "Fuente", importe: 358, stock: 88},
    {id: 2013, nombre: "Fan Cooler", importe: 182, stock: 41},
    {id: 2014, nombre: "Motherboard", importe: 991, stock: 62}
    ];

    function iterarProductos(componentes) {
        let guardarDatos = []
        for (let i = 0; i < componentes.length; i++) { 
            guardarDatos.push(componentes[i].stock +  " // " + componentes[i].id + " // " + componentes[i].nombre)
        }
       return guardarDatos
    }
    
console.log(iterarProductos(productosEnVenta))

console.log("gato")
