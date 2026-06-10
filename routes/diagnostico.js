const express = require("express");
const router = express.Router();

const Enfermedad =
require("../models/Enfermedad");

router.post("/", async (req,res)=>{

    const sintomasPaciente =
    req.body.sintomas;

    const enfermedades =
    await Enfermedad.find();

    let resultados=[];

    for(const e of enfermedades){

        const coincidencias =
        e.sintomas.filter(s =>
            sintomasPaciente.includes(s)
        );

        const porcentaje =
        (coincidencias.length /
        e.sintomas.length)*100;

        resultados.push({
            codigo:e.codigo,
            diagnostico:e.diagnostico,
            porcentaje,
            tratamiento:e.tratamiento
        });
    }

    resultados.sort(
        (a,b)=>b.porcentaje-a.porcentaje
    );

    res.json(resultados);

});

module.exports = router;
