import mongoose from "mongoose";

const ListaTelefonicaSchema = new mongoose.Schema({
    nome: String,
    telefone: String,
    favorito: Boolean,
    email: String,
    tags: [String],
    emergencia: Boolean,
});

export default mongoose.model("ListaTelefonica", ListaTelefonicaSchema);