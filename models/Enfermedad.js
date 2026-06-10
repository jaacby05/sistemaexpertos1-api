const mongoose = require("mongoose");

const enfermedadSchema = new mongoose.Schema({
    codigo: String,
    diagnostico: String,
    sintomas: [String],
    tratamiento: [String],
    observaciones: String
});

module.exports = mongoose.model(
    "Enfermedad",
    enfermedadSchema
);
