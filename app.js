let inventario = [];
function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles: \n"+
        "1. Agregar producto \n"+
        "2. Mostrar todos los productos \n"+
        "3. Buscar producto por nombre \n" +
        "4. Salir \n"+
        "Elige una opción: "
    ));
}

function iniciarPrograma() {
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa");
                continuar = false;
                break;
            default:
                alert("Opcion no válida. Intenta de nuevo");
        }
    }
 }

    function agregarProducto(){
        
        let nombreProducto = prompt("Introduce el nombre del producto");
        let cantidadProducto = parseInt(prompt("Introduce la cantidad en stock: "));
        let precioProducto = parseInt(prompt("Introduce el precio unitario del producto: "));

        if(cantidadProducto > 0 && precioProducto > 0) {
            let producto = {
                nombre: nombreProducto,
                cantidad: cantidadProducto,
                precio: precioProducto
            };

            inventario.push(producto);
            alert("Producto agregado");
        }else{
            alert("Cantidad y precio tiene que ser positivo y entero");
        }
    }

    function mostrarProducto(){
        if (inventario.length === 0){
            console.log("Inventario vacio");

        }else{
            let mensaje = "Productos en inventario: ";

            for(let i = 0; i < inventario.length; i++){
                mensaje+= `Producto ID: ${i+1} \n` +
                          `Nombre: ${inventario[i].nombre}\n` +
                          `Cantidad: ${inventario[i].cantidad}\n` +
                          `Precio: ${inventario[i].precio}\n` +
                          "---------------------------------------\n";

            }
            alert(mensaje);
        
    }
}

    function buscarProducto(){
            if (inventario.length === 0) {
                alert("Inventario vacío");
                return;
            }
        
            const busqueda = prompt("Introduce el nombre del producto a buscar:");
            let productoEncontrado = [];

            for (let producto of inventario) {
                if (producto.nombre.includes(busqueda)) {
                    productoEncontrado.push(producto);
                }
            }
        
            if (productoEncontrado.length === 0) {
                alert("No se encontraron productos con ese nombre.");
            } else {
                let mensaje = `Resultados de búsqueda (${productoEncontrado.length} encontrados):\n\n`;
                
                for (let producto of productoEncontrado) {
                    mensaje += `Nombre: ${producto.nombre}\n` +
                              `Cantidad: ${producto.cantidad}\n` +
                              `Precio: ${producto.precio}\n` +
                              "--------------------------\n";
                }
                
                alert(mensaje);
            }
        }


iniciarPrograma();