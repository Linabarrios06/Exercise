
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = process.env.port || 3032;

// app.use(cors());
// app.use(express.json());

// const accesorios = [
//     { id: 1, nombre: "Collar", color: "Dorado", },
//     { id: 2, nombre: "Anillo", color: "Plateado", },
//     { id: 2, nombre: "Aretes", color: "Rosado", },
//     ];

//     app.get("/", (req, res) => {

//     res.send("Hola clientes, asi es la creacion de mi API"); 
//     });

// app.get("/api/clientes", (req, res) => {
// res.send(accesorios);
//     });

// app.get("/api/clientes/:id", (req, res) => {
//     const accesorio = accesorios.find((e) => e.id === parseInt(req.params.id));
//     if (!accesorio) 
//         return res
//         .status(404)
//         .send("accesorio no encontrado en nuestra base datos"); 
//     else res.send(accesorio);    
// }); 
// // crear estudiante
// app.post("/api/clientes", (req, res) => { 
//     const acce = {
//         id: accesorios.length + 1, 
//         nombre: req.body.nombre, 
//         color: req.body.color, 
       
//     };

//     accesorios.push(acce);
//     res.send(acce);
// });
// // eliminar estudiante 
// app.delete("/api/clientes/:id", (req, res) => {
//     const accesorio = accesorios.find((d) => d.id === parseInt(req.params.id));
    
//     if (!accesorio) return res.status (404).send("Accesorio no encontrado"); 
//     else res.send(accesorio);
    
//     const index = accesorios.indexOf(accesorio);
//     accesorios.splice (index, 1);
//     res.send(accesorio); 
//     });

//     // actualizar estudiante
// app.put("/api/clientes/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const acceIndex = accesorios.findIndex((acce) => accesorio.id === id);

//     if (acceIndex !== -1) {
//         const updateAcce = {
//             id: id,
//             nombre: req.body.nombre,
//             color: req.body.color,
            
//         };

//     accesorios[acceIndex] = updateAcce;

//     res.send(updateAcce);
// }   else {
//     res.status(404).send("Accesorio no encontrado");
// }});

// app.listen(port,() => console.log("Escuchando el puerto:",port));