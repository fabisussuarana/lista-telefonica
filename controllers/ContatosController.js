import ListaTelefonica from "../models/ListaTelefonica.js";

const addContato = async (req, res) => {
    try{
        const novoContato = await ListaTelefonica.create(req.body);
        res.json(novoContato);
    } catch(error){
        res.json({ error: error });
    }
}

const listaContato = async (req, res) => {
    try{
        const listaContato = await ListaTelefonica.find();
        res.json(listaContato);
    } catch(error){
        res.json({ error: error });
    }
}

const pesquisaContato = async (req, res) => {
    try {
        const termo = req.params.termoBusca;

        const listaContato = await ListaTelefonica.find({
            $or: [
                { nome: { $regex: termo, $options: "i" } },
                { telefone: { $regex: termo, $options: "i" } }
            ]
        });

        res.json(listaContato);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

const atualizaContato = async (req, res) => {
    try {
        const atualizaContato = await ListaTelefonica.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(atualizaContato);
    } catch (error) {
        res.json({ error: error });
    }
}

const deletaContato = async (req, res) => {
    try {
        const deletaContato = await ListaTelefonica.findByIdAndDelete(
            req.params.id
        );
        res.json(deletaContato);
    } catch (error) {
        res.json({ error: error });
    }
}

export {
    addContato,
    listaContato,
    pesquisaContato,
    atualizaContato,
    deletaContato
}