import express, { json } from "express"

const app = express();

app.use(express.json());

const livros = [
    {
        id:1,
        título: "O Senhor dos Aneis"
    },
    {
        id:2,
        título: "O Hobbit"
    }
]

function buscaLivro(id){
    return livros.findIndex(livros=>{
        return livros.id === Number(id);
    })
}

app.get("/",(req,res)=>{
    res.status(200).send("Curso de Node.js");
});

app.get("/livros",(req,res)=>{
    res.status(200).json(livros);
},)

app.get("/livros/:id",(req,res)=>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros",(req,res)=>{
    livros.push(req.body);
    res.status(201).send("Livro cadastrado");
},)


export default app;