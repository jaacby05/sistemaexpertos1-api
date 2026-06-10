require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB conectado");
})
.catch(err => {
    console.error(err);
});

app.get("/", (req,res)=>{
    res.json({
        mensaje:"API Sistema Experto funcionando"
    });
});

app.use(
    "/api/enfermedades",
    require("./routes/enfermedades")
);

app.use(
    "/api/diagnostico",
    require("./routes/diagnostico")
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en puerto ${PORT}`);
});
