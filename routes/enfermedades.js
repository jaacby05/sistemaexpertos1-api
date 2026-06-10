const express = require("express");
const router = express.Router();

const Enfermedad =
require("../models/Enfermedad");

router.get("/", async (req,res)=>{

    const datos =
    await Enfermedad.find();

    res.json(datos);

});

router.post("/", async (req,res)=>{

    const nueva =
    new Enfermedad(req.body);

    await nueva.save();

    res.json({
        mensaje:"Enfermedad creada"
    });

});

module.exports = router;
