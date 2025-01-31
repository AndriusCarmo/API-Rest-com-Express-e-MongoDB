import express, { json } from "express"
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error",(erro)=>{
    console.log("erro de conexão",erro);
});

conexao.once("open",()=>{
    console.log("Conexão feita com o banco feita com sucesso");
})

const app = express();
routes(app);


export default app;