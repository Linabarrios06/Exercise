 const express = require("express");
 const cors = require("cors");
 const app = express();
 const port = process.env.port || 3030;

 app.use(cors());
 app.use(express.json());

 const accesorios = [
     { id: 1, nombre: "collar", color: "dorado"},
     { id: 2, nombre: "pulsera", color: "plateado" },
     { id: 3, nombre: "aretes", color: "rosado"},
     { id: 4, nombre: "cadenas", color: "dorado"},
     ];

 app.get("/", (req, res) => {

     res.send("Hola Clientes, asi es la creacion de mi API"); 
     });

 app.get("/api/accesorios", (req, res) => {
 res.send(accesorios);
     });

 app.get("/api/accesorios/:id", (req, res) => {
     const acces = accesorios.find((e) => e.id === parseInt(req.params.id));
     if (!acces) 
         return res
         .status(404)
         .send("Accesorio no encontrado en nuestra base datos"); 
     else res.send(acces);    
 }); 
 // crear estudiante
 app.post("/api/accesorios", (req, res) => { 
     const acces = {
         id: accesorios.length + 1, 
         nombre: req.body.nombre, 
         color: req.body.color,  
     };

     accesorios.push(acce);
     res.send(acce);
 });
 // eliminar estudiante 
 app.delete("/api/accesorios/:id", (req, res) => {
     const acces = accesorios.find((d) => d.id === parseInt(req.params.id));
    
     if (!acces) return res.status (404).send("Accesorio no encontrado"); 
     else res.send(acces);
    
     const index = accesorios.indexOf(acces);
     accesorios.splice (index, 1);
     res.send(acces); 
     });

     // actualizar estudiante
 app.put("/api/accesorios/:id", (req, res) => {
     const id = parseInt(req.params.id);
     const acceIndex = accesorios.findIndex((acce) => acce.id === id);
     if (acceIndex !== -1) {
         const updateAcce= {
             id: id,
             nombre: req.body.nombre,
             color: req.body.color,
         };

     accesorios[acceIndex] = updateAcce;

     res.send(updateAcce);
 }   else {
     res.status(404).send("Accesorio no encontrado");
 }});

 app.listen(port,() => console.log("Escuchando el puerto:",port));






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

// app.get("/", (req, res) => {
//     res.send("Hola clientes, asi es la creacion de mi API"); 
// });

// app.get("/api/clientes",(req, res) => {
//     res.send(accesorios);
// });

// app.get("/api/clientes/:id", (req, res) => {
//     const accesorio = accesorios.find((e) => e.id === parseInt(req.params.id));
//     if (!accesorio) 
//         return res
//              .status(404)
//              .send("accesorio no encontrado en nuestra base datos"); 
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

// app.delete("/api/clientes/id:", (req, res) => {
//     const accesorios = accesorios.find((d) => d,id === parseInt(req.params.id));
//     if (!accesorio) return res.status(404).send("este accesorio no existe ")
//     else res.send(accesorios);
//     const index = juego.indexOf(accesorios);
//     res.send(accesorios);
// });

// app.listen(port,() => console.log("Escuchando el puerto:",port));
