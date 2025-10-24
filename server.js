import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { 
    addContato, 
    atualizaContato, 
    deletaContato, 
    listaContato, 
    pesquisaContato 
} from "./controllers/ContatosController.js";

dotenv.config();

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao MongoDB irruu");
    } catch (error) {
        console.log("Erro ao conectar ao MongoDB. Erro: ", error);
    }
}

connectDB();

app.post("/addContato", addContato);

app.get("/listaContato", listaContato);

app.get("/listaContato/:termoBusca", pesquisaContato);

app.put("/atualizaContato/:id", atualizaContato);

app.delete("/deletaContato/:id", deletaContato);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));