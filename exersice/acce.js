// function generarTablaAccesorios(){
//     const tbody = document.getElementById("tbody-accesorios");

//         fetch("http://localhost:3032/api/clientes")
//        .then(response => response.json())
//        .then(accesorios => {
//         accesorios.forEach(function (accesorios) { //forEach es el bucle utilizado
//             const fila = tbody.insertRow();
//             const celdaId = fila.insertCell();
//             const celdaNombre = fila.insertCell();
//             const celdaColor = fila.insertCell();
           

//             celdaId.textContent = accesorios.id;
//             celdaNombre.textContent = accesorios.nombre;
//             celdaColor.textContent = accesorios.color;
          
//         });
//        });
// }
// generarTablaAccesorios();